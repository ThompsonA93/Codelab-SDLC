package at.thauer.solid.interfacesegregation.antipattern;

/**
 * An example violating the aspect of interface segregation - a 'fat' interface.
 */
public interface MultifunctionIoTDevice {
    void print();
    void scan();
    void fax();
    void connect();
    void disconnect();
}
