> Reference: [Domain-Driven Design, Eric Evans (2003)](https://www.google.com/search?q=Domain+driven+architecture+book+evans)

The practical lab represents the implementation of one continuous project, separated into 4 folders. Each folder represents a stage of the development process following domain-driven architecture.

- [1. Domain Layer](#1-domain-layer)
- [2. Application Layer](#2-application-layer)
- [3. Infrastructure Layer](#3-infrastructure-layer)
- [4. Presentation Layer](#4-presentation-layer)
- [General Aspects of DDA](#general-aspects-of-dda)
  - [Dependency Rule](#dependency-rule)
  - [Testing strategies](#testing-strategies)
  - [Port and Adapter Types](#port-and-adapter-types)
  - [Cross-Cutting Concerns](#cross-cutting-concerns)


## 1. Domain Layer

The domain layer consists of the inner core of an application, describing information and data in form of classes, records and value objects.
1. Entities: Classes or Records fully describing the layout of a database object, but in the given programming language's native type system.
2. Value-Objects: Wrappers for primitive values that demand either very specific logic or formats.

## 2. Application Layer

The application layer consists of the second layer of the application. 
1. Ports: Ports are interfaces that describe mandatory functionalities for a concrete implementation for a tool, later implemented as part of the infrastructure.
2. Data Transfer Objects: These describe minimal data models to create, read, update or delete in the context of a port.
3. Use-Cases: Use-cases describe a specific workflow using abstract classes that the application must satisfiy.

## 3. Infrastructure Layer

The infrastructure layer describes the third layer of the software in development. Each specific component here must import and implement the respective port from the application layer.
1. Adapters: Adapters are the concrete implementation for a given tool or chain of tools. In most cases, you will have a 1 Adapter to 1 Port relationship, although one adapter may aswell implement multiple ports, depending on their slicing.
2. Persistence: Any concrete data storage workflow must occur here. 

## 4. Presentation Layer

The presentation layer is another set of the third layer.
1. Controllers: These manage the request-response model and control the flow of the application logic by calling upon the application ports.
2. Routers: These describe the routings for the component in question, i.e. HTTP-Routing, Context-Navigation, and describe the response message given a specific format.


## General Aspects of DDA

### Dependency Rule

The dependency rule describes that the inner software layers, the Domain and Application, must remain agnostic of the outer layers, Infrastructure and Presentation.
This is best described by the concepts of IoC and DI.

1. **Inversion of Control (IoC)**.
    ```ts
    /**
     * @file src/application/ports/UserRepository.ts
     * Defines the contract for user persistence.
     * By using an interface, the Application Layer achieves Inversion of Control (IoC);
     * it dictates what functionality it needs without knowing who provides it.
     */
    export interface UserRepository {
    findById(id: string): Promise<{ name: string } | null>;
    }
    ```
2. **Dependency Injection (DI)**.
    ```ts
    /**
     * @file src/application/use-cases/GetUserUseCase.ts
     * Orchestrates business logic.
     * Dependency Injection (2) occurs in the constructor, where an implementation
     * of UserRepository is injected, keeping the class decoupled from infrastructure.
     */
    import { UserRepository } from "../ports/UserRepository";

    export class GetUserUseCase {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(id: string) {
        const user = await this.userRepository.findById(id);
        if (!user) throw new Error("User not found");
        return { userId: id, fullName: user.name.toUpperCase() };
    }
    }
    ```

    ```ts
    /**
     * @file src/infrastructure/adapters/PostgresUserRepository.ts
     * Concrete implementation of the UserRepository port.
     * This class fulfills the dependency requirement without the Use-Case
     * ever needing to know that it is talking to a PostgreSQL database.
     */
    import { UserRepository } from "../../application/ports/UserRepository";

    export class PostgresUserRepository implements UserRepository {
    async findById(id: string) {
        return { name: "John Doe" };
    }
    }
    ```
3. **Composition Root**.
    ```ts
    /**
     * @file src/di-container.ts
     * T
     * the composition root. It is the only file permitted to know about both the 
     * infrastructure adapters and the application use-cases to wire them together.
     */
    import { PostgresUserRepository } from "./infrastructure/adapters/PostgresUserRepository";
    import { GetUserUseCase } from "./application/use-cases/GetUserUseCase";

    const userRepository = new PostgresUserRepository();
    const getUserUseCase = new GetUserUseCase(userRepository);
    ```



### Testing strategies

- Unit-Tests
  - Domain Layer: Verify value object and domain logic
  - Application Layer: Test use-cases with mocked ports
- Integration tests
  - Infrastructure layer: Validate singular connections for actual databases, message brokers or external APIs using concrete adapters
- Acceptance tests
  - Presentation layer: Verify the entire workflow from route to database query to validate the business requirement

### Port and Adapter Types

We differentiate between Driven and Driving ports and adapters. Semantically, the difference is whether our software calls upon another service, or if another software calls upon our program.


### Cross-Cutting Concerns

- Common Modules: Contains shared logic used accross all layers, such as domain events, exception management or utility functions.
- Observability: Logging and Tracing must be accessible by all layers without violating any dependency rule.



