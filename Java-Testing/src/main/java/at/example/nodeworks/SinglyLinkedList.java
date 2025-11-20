package at.example.nodeworks;

public class SinglyLinkedList {
    Node start;

    public SinglyLinkedList(Node start){
        this.start = start;
    }

    public void appendNode(Node node){
        Node current = this.start;

        while (!current.getNeighbours().isEmpty()) {
            current = current.getNeighbours().keySet().iterator().next();
        }

        current.addNeighbour(node, 1);
    }

    public void printList(){
        Node current = this.start;
        StringBuilder sb = new StringBuilder("List: ");

        while (true) {
            sb.append("Node ").append(current.getId());
            if (current.getNeighbours().isEmpty()) {
                break;
            }
            current = current.getNeighbours().keySet().iterator().next();
            sb.append(" -> ");
        }
        System.out.println(sb);
    }

    public static void main(String[] args) {
        Node a = new Node(1);
        Node b = new Node(2);
        Node c = new Node(5);
        Node d = new Node(4);
        Node e = new Node(3);

        SinglyLinkedList sll = new SinglyLinkedList(a);
        sll.appendNode(b);
        sll.appendNode(c);
        sll.appendNode(d);
        sll.appendNode(e);

        sll.printList();
    }
}
