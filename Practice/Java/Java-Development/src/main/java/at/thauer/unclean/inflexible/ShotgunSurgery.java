package at.thauer.unclean.inflexible;

public class ShotgunSurgery {

    public void processMonthlyActivity(Account account, double transactionAmount) {
        if (account.balance < 100 && account.status.equals("ACTIVE")) {
            account.status = "SUSPENDED";
            System.out.println("Account status downgraded to SUSPENDED due to low balance.");
        }

        account.balance += transactionAmount;
    }

    public static void main(String[] args) {
        Account user = new Account(500.0);
        ShotgunSurgery processor = new ShotgunSurgery();
        NotificationService notifier = new NotificationService();
        ReportingService reporter = new ReportingService();

        notifier.sendNotification(user);
        System.out.println(reporter.generateReport(user));

        processor.processMonthlyActivity(user, -450.0);

        System.out.println("\n--- After Status Change ---");
        notifier.sendNotification(user);
        System.out.println(reporter.generateReport(user));
    }
}