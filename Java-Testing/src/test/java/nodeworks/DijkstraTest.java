package nodeworks;

import at.example.nodeworks.Dijkstra;
import at.example.nodeworks.Node;
import org.junit.jupiter.api.Test;
import java.util.List;

public class DijkstraTest {
    @Test
    void testDijkstraFailsWithNegativeWeight() {
        Node start = new Node(10);
        Node middle = new Node(20);
        Node end = new Node(30);

        start.addNeighbour(end, 10);

        start.addNeighbour(middle, 1);
        middle.addNeighbour(end, -2);

        List<Node> graph = List.of(start, middle, end);
        Dijkstra dijkstra = new Dijkstra(graph);

        System.out.println("Running Dijkstra's algorithm on graph with negative weight edge...");
        dijkstra.getDistance(start, end);
    }
}
