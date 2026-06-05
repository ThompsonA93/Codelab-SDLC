export enum LoanPurpose {
    PERSONAL = 'PERSONAL',
    MORTGAGE = 'MORTGAGE',
    EDUCATION = 'EDUCATION'
}

/**
 * Validates a loan application based on strict banking boundaries.
 * @param age - Applicant age. [Two-Bounded: 18 to 70]
 * @param score - Credit score. [One-Bounded: Minimum 300]
 * @param isEmployed - Employment status. [Boolean]
 * @param purpose - Purpose of the loan. [Enumeration]
 * @tip Age: 18 and 70 are inclusive. Score: Below 300 is an automatic fail.
 */
export const validateLoanRequest = (
    age: number, 
    score: number, 
    isEmployed: boolean, 
    purpose: LoanPurpose
): boolean => {
    throw new Error("Method not implemented");
};