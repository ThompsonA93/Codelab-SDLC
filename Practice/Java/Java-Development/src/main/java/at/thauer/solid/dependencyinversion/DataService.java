package at.thauer.solid.dependencyinversion;

/**
 * Exemplary class for Dependency Inversion
 * A. High-level modules (which defines what to do) should not depend on low-level modules (which define how to do).
 *      Both should depend on abstractions (interfaces/abstract classes).
 * B. Abstractions should not depend on details.
 *      Details (low-level modules) should depend on abstractions.
 */
public class DataService {
    private final DataSaver saver;

    public DataService(DataSaver saver) {
        this.saver = saver;
    }

    public void processAndSave(String data) {
        System.out.println("DataService: Processing data...");
        saver.save(data);
        System.out.println("DataService: Finished saving.");
    }

    static void main() {
        // Scenario 1: Inject DatabaseSaver
        System.out.println("--- Using Database Saver ---");
        DataSaver databaseSaver = new DatabaseSaver();
        DataService dbService = new DataService(databaseSaver);
        dbService.processAndSave("User Data");

        // Scenario 2: Inject FileSaver
        System.out.println("\n--- Using File Saver ---");
        DataSaver fileSaver = new FileSaver();
        DataService fileService = new DataService(fileSaver);
        fileService.processAndSave("Log Data");
    }
}
