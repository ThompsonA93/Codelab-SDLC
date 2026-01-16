# Test-Driven Development

A simple Code-Kata on the principle of TDD using Typescript. The principle is as follows:
- Write Test-Cases in `test.ts` files, on the expected behavior of the tested functionalities.
- Write the actual logic in the `.ts` files.
- Run with `npm run test:cov` to get detailed statistics on your progress.

1. `/src/unit/calculator` implements a simple calculator for Unit-Testing.
2. `/src/unit/property` implements a simple validator for Property-Based Testing (PBT).
3. `/src/boundary/loanValidator` implements a validator for boundary value analysis (BVA) and robustness testing.
4. `/src/integration/mathService` implements a service which uses the calculator for Integration Testing.
    - Rule: You must use `calculator.ts` for any arithmetic operations.
5. `/src/e2e/transactionController` implements an entry point for simulating End-to-End tests.
    - Rule: You must use `validator.ts`, `mathService.ts` and `loanValidator.ts` for any concrete logic.
