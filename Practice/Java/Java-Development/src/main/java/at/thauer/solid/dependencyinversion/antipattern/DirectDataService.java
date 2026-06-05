package at.thauer.solid.dependencyinversion.antipattern;

import at.thauer.solid.dependencyinversion.DatabaseSaver;

/**
 * An example for violating dependency inversion - instantiating the specific saver class.
 */
public class DirectDataService {
    private final DatabaseSaver saver;

    public DirectDataService() {
        this.saver = new DatabaseSaver();
    }

    public void save(String data) {
        System.out.println("DataService: Processing data...");
        saver.save(data);
        System.out.println("DataService: Finished saving.");
    }
}
