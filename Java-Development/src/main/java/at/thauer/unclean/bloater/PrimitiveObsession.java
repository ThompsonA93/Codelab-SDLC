package at.thauer.unclean.bloater;

public class PrimitiveObsession {
    private String customerId;
    private int loyaltyPoints;
    private String address;
    private int zipCode;

    public PrimitiveObsession(String customerId, int loyaltyPoints, String address, int zipCode) {
        this.customerId = customerId;
        this.loyaltyPoints = loyaltyPoints;
        this.address = address;
        this.zipCode = zipCode;
    }

    public void addPoints(int pointsToAdd) {
        if (pointsToAdd <= 0) {
            System.out.println("Error: Must add a positive number of points.");
            return;
        }
        this.loyaltyPoints += pointsToAdd;
        System.out.println(pointsToAdd + " points added. New total: " + this.loyaltyPoints);
    }

    public boolean isValidShippingAddress(String countryCode) {
        if (zipCode < 1000 || zipCode > 99999) {
            return false;
        }

        if (countryCode == null || countryCode.length() != 2 || !Character.isLetter(countryCode.charAt(0))) {
            System.out.println("Warning: Invalid country code format.");
            return false;
        }
        return true;
    }

    public static void main(String[] args) {
        PrimitiveObsession customer = new PrimitiveObsession(
                "CUST993",
                150,
                "123 Main St, Apt 4B, City, State",
                10001
        );

        customer.addPoints(50);
        customer.addPoints(-10);

        System.out.println("Shipping check (US): " + customer.isValidShippingAddress("US"));
        System.out.println("Shipping check (Invalid Code): " + customer.isValidShippingAddress("United States"));
    }
}