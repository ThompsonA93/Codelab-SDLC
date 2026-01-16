package at.thauer.unclean.inflexible;

public class ReportingService {
    public String generateReport(Account account) {
        if (account.status.equals("ACTIVE")) {
            return "Report: Account is in good standing.";
        } else if (account.status.equals("SUSPENDED")) {
            return "Report: Account needs review.";
        }
        return "Report: Status unknown.";
    }
}