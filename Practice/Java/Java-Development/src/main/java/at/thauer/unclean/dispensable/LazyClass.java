package at.thauer.unclean.dispensable;

public class LazyClass {

    private final String defaultSender = "support@company.com";

    public void sendWelcomeEmail(String recipient) {
        System.out.println("--- Notifying Customer ---");
        System.out.println("From: " + defaultSender);
        System.out.println("To: " + recipient);
        System.out.println("Subject: Welcome to our service!");
        System.out.println("Email sent successfully.");
    }

    public void sendDiscountNotification(String recipient, double discount) {
        System.out.println("--- Discount Alert ---");
        System.out.println("To: " + recipient);
        System.out.println("You received a " + discount + "% discount.");
    }

    public static void main(String[] args) {
        LazyClass notifier = new LazyClass();
        notifier.sendWelcomeEmail("new_user@example.com");
        notifier.sendDiscountNotification("loyal_user@example.com", 15.0);
    }
}