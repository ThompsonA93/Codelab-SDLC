# Test-Driven Development

## Setup
Run `npm install` to fetch any dependencies and start coding.
- Write Test-Cases in `test.ts` files, on the expected behavior of the tested functionalities.
- Write the actual logic in the `.ts` files.
- Run with `npm run test:cov` to get detailed statistics on your progress.

[package.json](./package.json) contains a full list of scripts and dependencies necessary for this Lab to work.

[jest.config](./jest.config) contains the testing configurations. Different archetypes of testing can be added by annotating them within the property `roots`.


## Lab Layout
The Lab encompasses a simple Code-Kata on the principle of TDD using Typescript.

1. `/src/unit/calculator` implements a simple calculator for Unit-Testing.
2. `/src/property/validator` implements a simple validator for Property-Based Testing (PBT).
3. `/src/boundary/loanValidator` implements a validator for boundary value analysis (BVA) and robustness testing.
4. `/src/integration/mathService` implements a service which uses the calculator for Integration Testing.
    - Rule: You must use `calculator.ts` for any arithmetic operations.
5. `/src/e2e/transactionController` implements an entry point for simulating End-to-End tests.
    - Rule: You must use `validator.ts`, `mathService.ts` and `loanValidator.ts` for any concrete logic.
6. `/src/mocks/*` implements a minimal showcase for Mocking and a common use case, external Mocks.

## Documentation

- [Javascript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide): The JavaScript Guide shows you how to use JavaScript and gives an overview of the language
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html): The TypeScript Handbook is intended to be a comprehensive document that explains TypeScript to everyday programmers. 
- [NPM](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager): npm installs, updates and manages downloads of dependencies of your project, that your Node.js application needs to work.
- [Jest](https://jestjs.io/): Jest is a JavaScript Testing Framework, including Code Coverage and Mocking
- [fast-check](https://fast-check.dev/): Property-based testing for JavaScript and TypeScript
