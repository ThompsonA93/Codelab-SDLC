package at.thauer.solid.singleresponsibility;

public class EmailService {
    public void sendConfirmation(Order order) {
        System.out.println("-> EmailService: SENT confirmation email to " + order.getCustomerEmail());
    }
}
