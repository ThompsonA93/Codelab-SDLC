import * as calculator from '../unit/calculator';

/**
 * Orchestrates a full transaction calculation by determining tax and final total.
 * @param amount - The base price of the item before tax.
 * @param taxRate - The decimal representation of the tax (e.g., 0.2 for 20%).
 * @returns An object containing the original price, the calculated tax, and the final total.
 * @tip total = (amount * taxRate) + amount
 */
export const processTransaction = (amount: number, taxRate: number) => {
    const tax = calculator.multiply(amount, taxRate);
    const total = calculator.add(amount, tax);
    
    return {
        itemPrice: amount,
        tax: tax,
        total: total
    };
};

/**
 * TODO: Calculates a new price after applying a percentage-based discount.
 * @param price - The original price before the discount.
 * @param percentage - The discount percentage to apply (e.g., 15 for 15%).
 * @returns The reduced price.
 * @tip result = price - (price * (percentage / 100))
 */
export const applyDiscount = (price: number, percentage: number): number => {
    throw new Error("Method is not implemented");
};

/**
 * TODO: Aggregates the total value of multiple items in a shopping cart.
 * @param prices - An array of numerical prices.
 * @returns The sum of all prices in the array.
 * @tip Use calculator.sumArray(prices)
 */
export const calculateCartTotal = (prices: number[]): number => {
    throw new Error("Method is not implemented");
};

/**
 * TODO: Calculates a monthly payment plan and accounts for rounding remainders.
 * @param total - The total amount to be paid.
 * @param months - The number of installments.
 * @returns An object containing the standard monthly payment and the adjusted final payment.
 * @tip base = total / months; finalMonth = base + (total % months)
 */
export const getInstallmentPlan = (total: number, months: number) => {
    throw new Error("Method is not implemented");
};

/**
 * TODO: Converts a net amount to a gross (brutto) amount using a standard tax rate.
 * @param amount - The net value (price without tax).
 * @returns The gross value including the default tax.
 * @private
 * @tip brutto = (amount * 0.19) + amount
 */
const nettoToBrutto = (amount: number) => {
    throw new Error("Method is not implemented");
}