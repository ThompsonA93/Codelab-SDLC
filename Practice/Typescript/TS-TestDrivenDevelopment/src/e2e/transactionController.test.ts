import { handleTransactionRequest } from './transactionController';

describe('Transaction E2E Flow', () => {
    test('Full Successful Flow: Valid USD transaction', () => {
        const response = handleTransactionRequest(100, "USD", 0.1);
        
        expect(response).toEqual({
            itemPrice: 100,
            tax: 10,
            total: 110
        });
    });

    test('Failure Flow: System rejects invalid currency before processing math', () => {
        expect(() => {
            handleTransactionRequest(100, "invalid_cc", 0.1);
        }).toThrow("INVALID_CURRENCY");
    });
});