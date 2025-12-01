package at.thauer.unclean.bloater;

import java.time.LocalDate;

public class LongMethod {

    private static final int MAX_ORDERS_FOR_LOYALTY = 50;
    private static final int MAX_AGE_FOR_STUDENT_DISCOUNT = 25;

    public String processCustomerData(String customerId, String tier, int ordersThisYear,
                                      int age, boolean hasPremiumService,
                                      LocalDate registrationDate, double averageSpend) {

        if (customerId == null || customerId.isEmpty()) {
            return "Error: Invalid customer ID.";
        }
        System.out.println("Processing customer: " + customerId);

        double discountRate = 0.0;
        switch (tier.toLowerCase()) {
            case "bronze":
                discountRate = 0.05;
                break;
            case "silver":
                discountRate = 0.10;
                break;
            case "gold":
                discountRate = 0.15;
                break;
            case "platinum":
                discountRate = 0.20;
                break;
            default:
                discountRate = 0.0;
                break;
        }

        double bonusRate = 0.0;
        if (ordersThisYear > MAX_ORDERS_FOR_LOYALTY) {
            bonusRate += 0.02;
        } else if (age <= MAX_AGE_FOR_STUDENT_DISCOUNT) {
            bonusRate += 0.03;
        } else {
            if (age >= 65) {
                bonusRate += 0.01;
            }
        }

        if (hasPremiumService) {
            bonusRate += 0.05;
            System.out.println("Premium service bonus applied.");
        }

        double finalRate = discountRate + bonusRate;
        long yearsRegistered = java.time.temporal.ChronoUnit.YEARS.between(registrationDate, LocalDate.now());

        String status;
        if (averageSpend > 500.0) {
            status = "High-Value Client";
        } else if (yearsRegistered > 5) {
            status = "Long-Term Client";
        } else {
            status = "Standard Client";
        }

        String result = String.format("Customer %s Status: %s. Base Rate: %.2f%%. Bonus Rate: %.2f%%. Total Discount: %.2f%%.",
                customerId, status, discountRate * 100, bonusRate * 100, finalRate * 100);

        System.out.println("Customer data processed successfully.");
        return result;
    }

    public static void main(String[] args) {
        LongMethod processor = new LongMethod();

        LocalDate registration = LocalDate.of(2018, 5, 10);

        String result1 = processor.processCustomerData(
                "CUST1001",
                "Platinum",
                60,
                22,
                true,
                registration,
                650.0
        );
        System.out.println("\n--- Result 1 ---");
        System.out.println(result1);

        String result2 = processor.processCustomerData(
                "CUST2002",
                "Bronze",
                5,
                70,
                false,
                LocalDate.of(2024, 1, 1),
                50.0
        );
        System.out.println("\n--- Result 2 ---");
        System.out.println(result2);
    }
}