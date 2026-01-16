package at.thauer.solid.dependencyinversion;

public class FileSaver implements DataSaver {
    @Override
    public void save(String data) {
        System.out.println("Saving '" + data + "' to a file.");
    }
}
