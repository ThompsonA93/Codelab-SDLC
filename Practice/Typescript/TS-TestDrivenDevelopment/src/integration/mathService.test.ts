import { processTransaction } from './mathService';

describe('MathService Integration Tests', () => {
    test('should correctly calculate tax and total for a transaction', () => {
        const price = 100;
        const taxRate = 0.2;
        const result = processTransaction(price, taxRate);
        expect(result).toEqual({
            itemPrice: 100,
            tax: 20,
            total: 120
        });
    });

    test('should handle zero tax rate correctly', () => {
        const result = processTransaction(50, 0);
        expect(result.tax).toBe(0);
        expect(result.total).toBe(50);
    });
});