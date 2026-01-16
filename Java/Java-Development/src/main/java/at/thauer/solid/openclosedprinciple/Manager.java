package at.thauer.solid.openclosedprinciple;

public class Manager implements Payable {
    private double baseSalary;

    public Manager(double baseSalary) {
        this.baseSalary = baseSalary;
    }

    @Override
    public double calculatePay() {
        return baseSalary * 1.10;
    }
}
