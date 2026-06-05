package at.thauer.solid.openclosedprinciple.antipattern;

public class Employee {
    public String type;
    public double baseSalary;

    public Employee(String type, double baseSalary){
        this.type = type;
        this.baseSalary = baseSalary;
    }
}
