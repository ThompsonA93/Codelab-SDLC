package at.thauer.solid.openclosedprinciple;

import java.util.ArrayList;
import java.util.List;

public class PaymentCalculator {

    public double calculateTotalMonthlyPay(List<Payable> employees) {
        double totalPay = 0;

        for (Payable employee : employees) {
            totalPay += employee.calculatePay();
        }
        return totalPay;
    }

    static void main(String[] args) {
        List<Payable> workforce = new ArrayList<>();

        workforce.add(new Manager(5000.00));
        workforce.add(new Developer(3000.00));

        PaymentCalculator calculator = new PaymentCalculator();

        System.out.println("Initial Payroll Calculation");
        System.out.printf("Total Pay (Manager + Developer): $%.2f%n", calculator.calculateTotalMonthlyPay(workforce));

        System.out.println("Adding Contractor");
        workforce.add(new Contractor(50.00, 160));

        System.out.printf("Total Pay (Manager + Developer + Contractor): $%.2f%n", calculator.calculateTotalMonthlyPay(workforce));
    }
}
