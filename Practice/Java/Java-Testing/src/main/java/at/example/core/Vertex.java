package at.example.core;

/**
 * A vertex represents a fundamental object or entity.
 */
public abstract class Vertex {
    private final String value;

    public Vertex(String value){
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}