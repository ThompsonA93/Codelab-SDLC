package at.thauer.solid.liskovsubstitution;

public class Square implements Shape{
    private int side;

    public Square(int side) {
        this.side = side;
    }

    // Specialized setter for the Square's internal constraint
    public void setSide(int side) {
        this.side = side;
    }

    @Override
    public int getArea() {
        return side * side;
    }
}
