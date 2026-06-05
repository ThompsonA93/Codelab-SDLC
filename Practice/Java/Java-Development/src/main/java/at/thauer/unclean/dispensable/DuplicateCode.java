package at.thauer.unclean.dispensable;

import java.text.DecimalFormat;
import java.time.LocalDate;

public class DuplicateCode {

    private static final double BASE_TAX_RATE = 0.15;
    private static final double DISCOUNT_THRESHOLD = 100.0;
    private static final double SHIPPING_FEE = 15.0; // New constant

    public String calculateFinalPrice(double unitPrice, int quantity, String currencySymbol) {
        System.out.println("--- Starting Price Calculation for Goods ---");
        LocalDate orderDate = LocalDate.now();
        System.out.println("Processing date: " + orderDate);

        double subTotal = unitPrice * quantity;

        double taxAmount = subTotal * BASE_TAX_RATE;
        double finalPrice = subTotal + taxAmount;
        System.out.println("Price before discount: " + finalPrice);

        if (finalPrice > DISCOUNT_THRESHOLD) {
            finalPrice = finalPrice * 0.95; // 5% discount
            System.out.println("Discount applied.");
        } else {
            System.out.println("No discount applied.");
        }

        finalPrice += SHIPPING_FEE; // Add shipping fee
        System.out.println("Shipping added. Total: " + finalPrice);

        DecimalFormat df = new DecimalFormat("#.##");
        System.out.println("Calculation complete.");
        return "Final Price: " + currencySymbol + df.format(finalPrice);
    }

    public String determineTotalCost(double serviceRate, int hours, String currencyLabel) {
        System.out.println("--- Starting Cost Calculation for Services ---");
        LocalDate bookingDate = LocalDate.now();
        System.out.println("Processing date: " + bookingDate);

        double rawCost = serviceRate * hours;

        double taxLiability = rawCost * BASE_TAX_RATE;
        double totalCost = rawCost + taxLiability;
        System.out.println("Cost before discount: " + totalCost);

        if (totalCost > DISCOUNT_THRESHOLD) {
            totalCost = totalCost * 0.95;
            System.out.println("Discount applied.");
        } else {
            System.out.println("No discount applied.");
        }

        totalCost += SHIPPING_FEE;
        System.out.println("Service fee added. Total: " + totalCost);

        DecimalFormat formatter = new DecimalFormat("#.##");
        System.out.println("Calculation complete.");
        return "Total Cost: " + currencyLabel + formatter.format(totalCost);
    }

    public double getDiscountThreshold() {
        return DISCOUNT_THRESHOLD;
    }

    public static void main(String[] args) {
        DuplicateCode calculator = new DuplicateCode();

        String goodsResult = calculator.calculateFinalPrice(50.0, 3, "$");
        System.out.println("Result: " + goodsResult);
        System.out.println("----------------------------------------");

        String serviceResult = calculator.determineTotalCost(25.0, 5, "€");
        System.out.println("Result: " + serviceResult);
    }
}