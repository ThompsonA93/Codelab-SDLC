import * as repo from './transactionRepository';

/**
 * Workflow:
 * 1. Receive transaction data.
 * 2. Attempt to save to the SQL database via the repository.
 * 3. Return success/fail status.
 */
export const finalizeTransaction = async (id: string, amount: number) => {
    const success = await repo.saveToDatabase({ id, amount, status: 'COMPLETED' });
    return success ? "SUCCESS" : "FAILED";
};