package at.example.core;

import java.util.LinkedList;
import java.util.List;

public class PolyVertex extends Vertex {
    private final List<PolyVertex> neighbors;

    public PolyVertex(String value) {
        super(value);
        this.neighbors = new LinkedList<>();
    }

    // Method to manage the links
    public void addNeighbor(PolyVertex neighbor) {
        this.neighbors.add(neighbor);
    }

    public List<PolyVertex> getNeighbors() {
        return neighbors;
    }
}
