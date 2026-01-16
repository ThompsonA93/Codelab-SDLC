import * as dbService from './databaseService';
import * as repo from './transactionRepository';

// This one line tells Jest to replace all functions in this file with "Mock Spies"
jest.mock('./transactionRepository');

describe('Database Service with Mocks', () => {
    test('should return SUCCESS when the database save is successful', async () => {
        // Arrange: We "Program" the mock (like Mockito's when(...).thenReturn(...))
        const mockedSave = repo.saveToDatabase as jest.Mock;
        mockedSave.mockResolvedValue(true);

        // Act
        const result = await dbService.finalizeTransaction("TX_123", 100);

        // Assert
        expect(result).toBe("SUCCESS");
        // Verification: Ensure the repo was called with the right SQL-like object
        expect(mockedSave).toHaveBeenCalledWith({
            id: "TX_123",
            amount: 100,
            status: 'COMPLETED'
        });
    });

    test('should return FAILED when the database rejects the entry', async () => {
        const mockedSave = repo.saveToDatabase as jest.Mock;
        mockedSave.mockResolvedValue(false);

        const result = await dbService.finalizeTransaction("TX_123", 100);
        expect(result).toBe("FAILED");
    });
});