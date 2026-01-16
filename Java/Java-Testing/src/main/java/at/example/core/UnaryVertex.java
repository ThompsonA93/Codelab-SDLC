package at.example.core;

public class UnaryVertex extends Vertex {
    private UnaryVertex next;

    public UnaryVertex(String value, UnaryVertex next) {
        super(value);
        this.next = next;
    }

    public UnaryVertex getNext() {
        return next;
    }

    public void setNext(UnaryVertex next) {
        this.next = next;
    }

}
