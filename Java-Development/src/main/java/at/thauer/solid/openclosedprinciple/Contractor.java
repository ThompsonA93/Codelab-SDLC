package at.thauer.solid.openclosedprinciple;

public class Contractor implements Payable {
    private double hourlyRate;
    private int hoursWorked;

    public Contractor(double hourlyRate, int hoursWorked) {
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    @Override
    public double calculatePay() {
        return hourlyRate * hoursWorked;
    }
}
