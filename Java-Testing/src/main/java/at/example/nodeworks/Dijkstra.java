package at.example.nodeworks;

import java.util.*;

public class Dijkstra {
    private final List<Node> graph;

    public Dijkstra(List<Node> graph) {
        this.graph = graph;
    }

    public void getDistance(Node a, Node b) {
        Map<Node, Integer> distances = new HashMap<>();
        Map<Node, Node> predecessors = new HashMap<>();
        Set<Node> settledNodes = new HashSet<>();
        PriorityQueue<Node> unsettledNodes = new PriorityQueue<>(
                Comparator.comparingInt(node -> distances.getOrDefault(node, Integer.MAX_VALUE))
        );

        for(Node n : graph){
            distances.put(n, Integer.MAX_VALUE);
            predecessors.put(n, null);
        }
        distances.put(a, 0);
        unsettledNodes.add(a);

        while (!unsettledNodes.isEmpty()) {
            Node currentNode = unsettledNodes.poll();
            settledNodes.add(currentNode);

            if (currentNode.equals(b)) {
                break;
            }

            for (Map.Entry<Node, Integer> adjacencyPair : currentNode.getNeighbours().entrySet()) {
                Node neighbor = adjacencyPair.getKey();
                int edgeWeight = adjacencyPair.getValue();

                if (!settledNodes.contains(neighbor)) {
                    int newDistance = distances.get(currentNode) + edgeWeight;
                    int neighborCurrentDistance = distances.getOrDefault(neighbor, Integer.MAX_VALUE);

                    if (newDistance < neighborCurrentDistance) {
                        distances.put(neighbor, newDistance);
                        predecessors.put(neighbor, currentNode);
                        unsettledNodes.remove(neighbor);
                        unsettledNodes.add(neighbor);
                    }
                }
            }
        }
        printPath(b, distances, predecessors);
    }

    private void printPath(Node target, Map<Node, Integer> distances, Map<Node, Node> predecessors) {
        List<Node> shortestPath = new LinkedList<>();
        Node step = target;

        if (distances.getOrDefault(target, Integer.MAX_VALUE) == Integer.MAX_VALUE) {
            System.out.println("Path to Node " + target.getId() + " is unreachable.");
            return;
        }

        while (step != null) {
            shortestPath.add(0, step);
            step = predecessors.get(step);
        }

        StringBuilder pathIds = new StringBuilder();
        for (int i = 0; i < shortestPath.size(); i++) {
            pathIds.append(shortestPath.get(i).getId());
            if (i < shortestPath.size() - 1) {
                pathIds.append(" -> ");
            }
        }

        System.out.printf("Shortest Path to Node %d: %s (Distance: %d)%n",
                target.getId(),
                pathIds,
                distances.get(target));
    }



    public static void main(String[] args) {
        Node a = new Node(1);
        Node b = new Node(2);
        Node c = new Node (3);
        Node d = new Node(4);
        Node e = new Node(5);
        Node f = new Node(6);

        a.addNeighbour(b, 3);
        a.addNeighbour(d, 5);

        b.addNeighbour(a, 2);
        b.addNeighbour(c, 4);
        b.addNeighbour(e, 10);

        c.addNeighbour(a, 3);
        c.addNeighbour(e, 5);

        d.addNeighbour(b, 3);
        d.addNeighbour(c, 4);

        e.addNeighbour(a, 1);
        e.addNeighbour(d, 10);

        f.addNeighbour(c, 5);

        List<Node> graph = List.of(a,b,c,d,e,f);
        Dijkstra dijkstra = new Dijkstra(graph);

        dijkstra.getDistance(a,b);
        dijkstra.getDistance(a,e);
        dijkstra.getDistance(a,f);
    }
}
