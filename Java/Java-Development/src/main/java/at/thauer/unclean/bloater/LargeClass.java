package at.thauer.unclean.bloater;

import java.util.ArrayList;
import java.util.List;

public class LargeClass {
    private String firstName;
    private String lastName;
    private int age;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private String country;
    private List<String> historyRecords;
    private double balance;
    private String accountNumber;

    public LargeClass(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.historyRecords = new ArrayList<>();
    }

    public double processTransaction(double amount, String type) {
        // This method does too many things: validation, logging, and calculation.
        if (amount <= 0) {
            logAction("Error: Invalid transaction amount provided.");
            return balance;
        }

        if (type.equalsIgnoreCase("deposit")) {
            balance += amount;
            logAction("Deposit of " + amount + " successful. New balance: " + balance);
        } else if (type.equalsIgnoreCase("withdrawal")) {
            if (balance >= amount) {
                balance -= amount;
                logAction("Withdrawal of " + amount + " successful. New balance: " + balance);
            } else {
                logAction("Error: Insufficient funds for withdrawal of " + amount + ". Current balance: " + balance);
            }
        } else if (type.equalsIgnoreCase("fee")) {
            if (amount < balance * 0.1) {
                balance -= amount;
                logAction("Fee of " + amount + " applied. New balance: " + balance);
            } else {
                logAction("Warning: Fee amount is too high. Fee not applied.");
            }
        } else {
            logAction("Error: Unknown transaction type: " + type);
        }

        if (balance > 10000) {
            balance += balance * 0.005;
            logAction("Bonus interest applied due to high balance.");
        }

        return balance;
    }

    public String formatAddress() {
        // High cognitive complexity is starting here.
        if (addressLine1 == null || city == null || country == null) {
            return "Address incomplete";
        }

        StringBuilder sb = new StringBuilder();
        sb.append(firstName).append(" ").append(lastName).append("\n");
        sb.append(addressLine1);
        if (addressLine2 != null && !addressLine2.trim().isEmpty()) {
            sb.append("\n").append(addressLine2);
        }
        sb.append("\n").append(city).append(", ").append(country);
        return sb.toString();
    }

    private void logAction(String action) {
        String logEntry = new java.util.Date().toString() + " - " + action;
        this.historyRecords.add(logEntry);
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getAddressLine1() {
        return addressLine1;
    }

    public void setAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
    }

    public String getAddressLine2() {
        return addressLine2;
    }

    public void setAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public List<String> getHistoryRecords() {
        return historyRecords;
    }

    public void setHistoryRecords(List<String> historyRecords) {
        this.historyRecords = historyRecords;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public static void main(String[] args) {
        LargeClass customerAccount = new LargeClass("Otto", "Normalverbraucher");

        customerAccount.setAddressLine1("123 Maria Rucksack");
        customerAccount.setCity("Dodroben");
        customerAccount.setCountry("Am Berg");

        System.out.println("--- Customer Account Initialized ---");
        System.out.println("Customer:" + customerAccount.firstName + " " + customerAccount.lastName);
        System.out.println("Formatted Address:" + customerAccount.formatAddress());

        System.out.println("\n--- Processing Transactions ---");

        double currentBalance = customerAccount.processTransaction(5000.0, "deposit");
        System.out.println("After Deposit: EUR " + currentBalance);

        currentBalance = customerAccount.processTransaction(200.0, "withdrawal");
        System.out.println("After Withdrawal: EUR " + currentBalance);

        currentBalance = customerAccount.processTransaction(6000.0, "deposit");
        System.out.println("After Large Deposit: EUR " + currentBalance);

        currentBalance = customerAccount.processTransaction(10.0, "fee");
        System.out.println("After Fee: EUR " + currentBalance);

        currentBalance = customerAccount.processTransaction(15000.0, "withdrawal");
        System.out.println("After Attempted Large Withdrawal: EUR" + currentBalance);

        System.out.println("------------------------------------");
    }

}