package nodeworks;

import at.example.nodeworks.Node;
import org.junit.jupiter.api.Test;
import java.util.Map;
import static org.junit.jupiter.api.Assertions.*;

public class NodeTest {
    @Test
    void testAddSingleNeighbour() {
        Node nodeA = new Node(1);
        Node nodeB = new Node(2);
        int weight = 10;

        nodeA.addNeighbour(nodeB, weight);
        Map<Node, Integer> neighbours = nodeA.getNeighbours();

        assertEquals(1, neighbours.size(), "Node A should have exactly one neighbor.");
        assertTrue(neighbours.containsKey(nodeB), "Node A's neighbors should contain Node B.");
        assertEquals(weight, neighbours.get(nodeB), "The weight to Node B should be 10.");
    }
}
