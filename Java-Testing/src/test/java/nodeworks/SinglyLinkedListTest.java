package nodeworks;

import at.example.nodeworks.Node;
import at.example.nodeworks.SinglyLinkedList;
import org.junit.jupiter.api.Test;
import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class SinglyLinkedListTest {

    @Test
    void testAppendAndPrint() {
        Node a = new Node(10);
        Node b = new Node(20);
        Node c = new Node(30);
        SinglyLinkedList sll = new SinglyLinkedList(a);

        ByteArrayOutputStream outputStreamCaptor = new ByteArrayOutputStream();
        PrintStream originalOut = System.out;
        System.setOut(new PrintStream(outputStreamCaptor));

        sll.appendNode(b);
        sll.appendNode(c);
        sll.printList();

        System.setOut(originalOut);


        String expectedOutput = "List: Node 10 -> Node 20 -> Node 30";
        String actualOutput = outputStreamCaptor.toString().trim();

        assertEquals(expectedOutput, actualOutput, "The printed list sequence should match the appended order.");

        assertEquals(1, a.getNeighbours().size(), "A should have one neighbor (B).");
        Node neighborB = a.getNeighbours().keySet().iterator().next();
        assertEquals(20, neighborB.getId(), "A's neighbor should be Node B (ID 20).");

        assertEquals(1, neighborB.getNeighbours().size(), "B should have one neighbor (C).");
        Node neighborC = neighborB.getNeighbours().keySet().iterator().next();
        assertEquals(30, neighborC.getId(), "B's neighbor should be Node C (ID 30).");

        assertTrue(neighborC.getNeighbours().isEmpty(), "C should be the last node and have no neighbors.");
    }

}
