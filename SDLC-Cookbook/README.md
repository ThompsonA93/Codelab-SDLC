# Software Development Life Cycle Cookbook

Learn to implement a website with all phases of a Software Development Life Cycle (SDLC): Create a server where users can write and read about cooking and baking recipes.
Additionally, design and implement a unique aspect for your own website.

## Agile Development

The progression through the Agile phases will be conducted iteratively, utilizing Kanban for progress monitoring and Git for version control.

### 1. Plan

Establish fundamental requirements and formulate prioritized tasks in form of Product Vision, User Stories, and Product Backlog. Form a Design Sprint via Crazy 8's.

- Product Vision: Purpose of the application in one sentence.
- User Stories: Multiple requirements of the website from a user's perspective.
- Product Backlog: All User Stories and technical tasks compiled into a single backlog.
- Crazy 8's: Sketch eight different ideas in eight minutes. Select the 3 best ideas to implement via selection or elimination.


### 2. Design

Design a (virtual) paper prototype and define the architecture of any required aspect of the project.

- Prototyping: Representation of each view via low-fidelity sketches.
- Database Schema: Definition of the data structure.
- Architecture:
  - Client-Server: Server responds to client requests in real-time.
  - Monoliths: A single server holds and computes everything for the client
  - Microservices: Multiple servers compute per-request what the client needs
- API Endpoints: Definition of URLs resembling API requests between Servers and Clients for serving specific data.


### 3. Develop

Start developing first structures for any architectural aspect.

- Agile Workflow: Focus on developing one artifact at one time.
- Kanban: Track and document changes for the current task.
- Git: Version and manage any software modifications over time.


### 4. Test

Create first tests for the virtual prototype to ensure that features meet requirements.

- Test Types: Consider what must be tested where.
  - Unit Testing
  - Integration Testing
  - User Acceptance tests
  - ...
- Test Scope: Consider the depth of testing for the given functionality.
  - Boundary Value Analysis
  - Robustness Tests
  - Paranoid Tests
  - ...
- Continuous Integration (CI): Automatically run tests whenever code is submitted or merged using Tools such as Git Workflows, 

### 5. Deploy

Make the working software accessible to end-users.

- Rollout Strategy: Assert where and how you want to roll out your software.
- Application Packaging: Prepare the final version of the code for production.
- Continuous Deployment (CD): Check how to automatize and configure automatic deployments for the given vendor.

### 6. Review

Inspect the results of the work and plan for the next cycle.

- Demonstrate the completed Kanban to gather commentary.
- Discuss what went well, what could be improved, such as communication, tools, coding practices, ..., and commit to one or two actionable improvements for the next phase.




## Creating a Techstack

For any given programming language, you must consider the following:

- Frontend: What will only the user see?
  - Javascript: React, Angular, Vue
  - C#: Blazor WebAssembly
  - Java: Thymeleaf
- Backend: What will only the system see?
  - Java: Spring Core
  - C#: ASP.NET Core
  - Javascript: Express.js + Node.js
- Database: What will the data look like?
  - Relational Data: PostgreSQL, MySQL
  - Document Data: MongoDB
  - Graph Data: Neo4J
  - Wide Column Data: Apache Cassandra
- Middleware: Are there any cross-cutting tasks?#
  - Auth: Okta, Auth0, IdentityServer
  - Caching: Redis
  - Traffic Management: Nginx, Apache HTTP Server
  - Message Brokers: Apache Kafka