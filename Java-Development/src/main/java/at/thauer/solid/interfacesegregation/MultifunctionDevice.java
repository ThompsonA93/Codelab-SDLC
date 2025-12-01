package at.thauer.solid.interfacesegregation;

public class MultifunctionDevice implements Printer, Scanner {

    @Override
    public void print(String document) {
        System.out.println("MultifunctionDevice printing: " + document);
    }

    @Override
    public void scan(String document) {
        System.out.println("MultifunctionDevice scanning: " + document);
    }
}
