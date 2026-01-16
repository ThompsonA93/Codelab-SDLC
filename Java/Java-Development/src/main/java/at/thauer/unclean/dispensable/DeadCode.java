package at.thauer.unclean.dispensable;

public class DeadCode {
    private final String unusedConfiguration = "PMD_SETTINGS_V1";

    private int activeCounter = 0;

    public int getActiveCounter() {
        return activeCounter;
    }

    public int updateCounter(int increment) {
        if (increment <= 0) {
            return activeCounter;
        }
        this.activeCounter += increment;
        return this.activeCounter;
    }

    private void cleanUpResources() {
        System.out.println("Cleaning up unused resources...");
    }

    public static void main(String[] args) {
        DeadCode instance = new DeadCode();
        System.out.println("Initial Counter: " + instance.getActiveCounter());
        instance.updateCounter(-2);
        System.out.println("Final Counter: " + instance.getActiveCounter());
    }
}