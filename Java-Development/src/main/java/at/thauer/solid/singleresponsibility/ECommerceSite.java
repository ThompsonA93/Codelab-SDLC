package at.thauer.solid.singleresponsibility;

import java.util.Arrays;
import java.util.List;

public class ECommerceSite {
    static void main(String[] args) {

        List<String> items = Arrays.asList("Laptop", "Mouse", "Keyboard");
        Order newOrder = new Order(items, "client@example.com");

        double total = newOrder.calculateTotal();

        System.out.println("Processing New Order (Items: " + items.size() + ", Total: $" + total + ")");

        OrderRepository repository = new OrderRepository();
        repository.save(newOrder);

        EmailService mailer = new EmailService();
        mailer.sendConfirmation(newOrder);

    }
}
