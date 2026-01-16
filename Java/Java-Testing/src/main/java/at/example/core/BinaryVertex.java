package at.example.core;

public class BinaryVertex extends Vertex {
    private BinaryVertex left;
    private BinaryVertex right;

    public BinaryVertex(String value) {
        super(value);
        this.left = null;
        this.right = null;
    }

    public BinaryVertex getLeft() {
        return left;
    }

    public void setLeft(BinaryVertex left) {
        this.left = left;
    }

    public BinaryVertex getRight() {
        return right;
    }

    public void setRight(BinaryVertex right) {
        this.right = right;
    }
}
