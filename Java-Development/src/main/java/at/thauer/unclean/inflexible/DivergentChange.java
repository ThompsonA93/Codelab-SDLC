package at.thauer.unclean.inflexible;

public class DivergentChange {

    private String productName;
    private double basePrice;

    private static final double SALES_TAX_RATE = 0.10; // 10%

    public DivergentChange(String productName, double basePrice) {
        this.productName = productName;
        this.basePrice = basePrice;
    }

    public double calculatePriceWithTax() {
        double taxAmount = this.basePrice * SALES_TAX_RATE;
        return this.basePrice + taxAmount;
    }

    public String createShippingLabel() {
        String label = String.format("PRODUCT: %s\n", this.productName);
        label += String.format("PRICE: %.2f\n", this.basePrice);
        label += "SHIP TO: Customer Address Placeholder";
        return label;
    }

    public static void main(String[] args) {
        DivergentChange product = new DivergentChange("Widget X", 99.99);

        System.out.println("Final Price (with tax): " + product.calculatePriceWithTax());
        System.out.println("\nGenerated Shipping Label:");
        System.out.println(product.createShippingLabel());
    }
}