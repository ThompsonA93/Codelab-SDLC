package at.thauer.solid.singleresponsibility.antipattern;

import java.util.List;

public class MonolithicOrder {
    private List<String> items;
    private String customerEmail;

    public MonolithicOrder(List<String> items, String email) {
        this.items = items;
        this.customerEmail = email;
    }

    public double calculateTotal() {
        System.out.println("Order: Calculating total for " + items.size() + " items...");
        return items.size() * 10.00;
    }

    public void saveToDatabase() {
        System.out.println("Order: Saving order to the database...");
    }

    public void sendConfirmationEmail() {
        System.out.println("Order: Sending confirmation email to " + customerEmail + "...");
    }
}
