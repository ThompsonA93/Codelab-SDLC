package at.thauer.solid.singleresponsibility;

import java.util.List;

public class Order {
    private List<String> items;
    private String customerEmail;

    public Order(List<String> items, String email) {
        this.items = items;
        this.customerEmail = email;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public double calculateTotal() {
        // Business Rule: Price per item is $10.00
        return items.size() * 10.00;
    }
}
