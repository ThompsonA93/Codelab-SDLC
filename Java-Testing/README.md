# Java-Testing

This repository contains a small collection of Java classes designed to illustrate fundamental concepts and archetypes of software testing. Its primary goal is to provide a practical sandbox for learning how to write tests and understand metrics like code coverage and mutation score.


## Setup and Build Instructions

This project uses Maven for dependency management and building. To clean, compile, and execute all tests and analysis reports, run the following targets either via CLI or IDE:
```xml
mvn clean
mvn install
mvn verify
```

- `mvn clean`: Deletes the target directory, removing previously compiled code and artifacts.
- `mvn install`: Compiles the source code, runs unit tests, and packages the resulting .jar file into your local Maven repository.
- `mvn verify`: Runs any checks on the results of integration tests to ensure quality criteria are met. In this project, it executes the testing plugins.

After running the build commands, you can view the generated reports in the target/site directory:

- Code Coverage Report (JaCoCo): `target/site/jacoco/index.html`
- Mutation Testing Report (PIT): `target/site/pit-reports/index.html`

## Testing Challenge

1. Refactor Code Quality: Identify and eliminate code smells present in the existing source code to improve readability and maintainability. Consider the following questions 
    - Is the class `Node` not actually a `Vertex`? What is their difference?
    - Which code smells are present in any of the classes?
2. Achieve 100% Code Coverage: Ensure that every line, branch, and instruction in the application code is executed by the test suite, verified using JaCoCo.
3. Achieve 100% Mutation Score: Validate the effectiveness of the test suite by achieving a 100% score in Mutation Testing using PITest.

## Code Extensions

1. Create a method `calculateCharacterSum` that calculates the integer sum for all characters following ASCII/Unicode.
2. Create a class `NodeNetwork` that implements `Dijstkra` to find the shortest paths for any given path. Review how your changes influence the completed test cases.
3. Create a method `setWeight` that overwrites the weight going from the first to the second node. Review how your changes influence the completed test cases.
