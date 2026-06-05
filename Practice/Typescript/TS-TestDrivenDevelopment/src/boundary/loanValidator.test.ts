import { validateLoanRequest, LoanPurpose } from './loanValidator';

describe('Loan Validator - BVA & Robustness', () => {
    describe('Age Boundary (18-70)', () => {
        test('Lower Boundary: should accept 18 (min) and reject 17 (min-1)', () => {
            expect(validateLoanRequest(18, 500, true, LoanPurpose.PERSONAL)).toBe(true);
            expect(validateLoanRequest(17, 500, true, LoanPurpose.PERSONAL)).toBe(false);
        });
        /**
         * @tip Consider the upper boundary of max and max+1 of age
         */

    });

    describe('Credit Score Boundary (300+)', () => {
        /**
         * @tip Knowing the credit score must be 300+, what boundaries must be tested?
         */
    });

    /**
     * @tip Robustness Testing involves "Invalid" inputs.
     * 1. What should happen if age is a decimal (18.5)? 
     * 2. What if score is Infinity?
     * 3. What if an invalid string is cast to the LoanPurpose enum?
     */
});