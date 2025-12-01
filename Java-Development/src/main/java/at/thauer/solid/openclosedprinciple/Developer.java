package at.thauer.solid.openclosedprinciple;

public class Developer implements Payable {
    private double baseSalary;

    public Developer(double baseSalary) {
        this.baseSalary = baseSalary;
    }

    @Override
    public double calculatePay() {
        return baseSalary + 500.00;
    }
}
