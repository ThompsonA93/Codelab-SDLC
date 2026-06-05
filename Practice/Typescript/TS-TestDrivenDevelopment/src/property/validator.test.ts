import * as fc from 'fast-check';
import * as validator from './validator';

describe('Validator Property-Based Tests', () => {
    describe('Invariants for Numerical Limits', () => {
        test('Boundary Rule: isValidAmount only accepts (0, 1000000]', () => {
            fc.assert(
                fc.property(fc.double(), (num) => {
                    const result = validator.isValidAmount(num);
                    if (num <= 0 || num > 1000000 || Number.isNaN(num)) {
                        return result === false;
                    }
                    return result === true;
                })
            );
        });
        /**
         * @tip Should the discount be a percentage (0-100) or an absolute value?
         */
    });

    describe('Invariants for Data Integrity', () => {
        test('Format Rule: Currency codes must be exactly 3 uppercase letters', () => {
            fc.assert(
                fc.property(fc.string(), (code) => {
                    const isValid = validator.isValidCurrencyCode(code);
                    const isThreeUpper = /^[A-Z]{3}$/.test(code);
                    
                    // The result must match our regex logic
                    return isValid === isThreeUpper;
                })
            );
        });
        /**
         * @tip Does isValidUsername(name) handle empty strings? Very long strings?
         */

        /**
         * @tip What happens if an array is passed with [10, -5, 20] for isValidPriceList(prices)?
         */
    });
});