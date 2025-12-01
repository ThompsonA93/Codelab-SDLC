package at.thauer.solid.openclosedprinciple.antipattern;

public class SalaryCalculator {
    public double calculatePay(Employee emp) {
        if (emp.type.equals("Manager")) {
            return emp.baseSalary * 1.10;
        } else if (emp.type.equals("Developer")) {
            return emp.baseSalary + 500.00;
        } else {
            return emp.baseSalary;
        }
    }
}
