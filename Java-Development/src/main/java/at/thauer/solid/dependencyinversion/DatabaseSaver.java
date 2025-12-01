package at.thauer.solid.dependencyinversion;

public class DatabaseSaver implements DataSaver {
    @Override
    public void save(String data) {
        System.out.println("Saving '" + data + "' to the database.");
    }
}
