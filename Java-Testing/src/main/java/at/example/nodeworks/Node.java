package at.example.nodeworks;

import java.util.HashMap;
import java.util.Map;

public class Node {
    private final int id;
    private final Map<Node, Integer> neighbours = new HashMap<>();

    public Node(int id){
        this.id = id;
    }

    public void addNeighbour(Node node, int weight){
        neighbours.put(node, weight);
    }

    public int getId() {
        return id;
    }

    public Map<Node, Integer> getNeighbours() {
        return neighbours;
    }
}
