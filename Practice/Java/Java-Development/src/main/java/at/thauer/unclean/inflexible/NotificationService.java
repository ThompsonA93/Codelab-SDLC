package at.thauer.unclean.inflexible;

public class NotificationService {
    public void sendNotification(Account account) {
        if (account.status.equals("ACTIVE")) {
            System.out.println("Notification: Sending regular updates.");
        } else {
            System.out.println("Notification: Account is restricted.");
        }
    }
}