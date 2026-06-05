package at.thauer.solid.singleresponsibility;

public class OrderRepository {
    public void save(Order order) {
        System.out.println("-> OrderRepository: SAVED order data to persistent storage.");
    }
}
