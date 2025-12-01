package at.thauer.solid.liskovsubstitution;

public class GeoShaper {
    public static void printShapeArea(Shape shape) {
        System.out.println(shape.getClass().getName() + " Area: " + shape.getArea());
    }

    static void main(String[] args) {
        Rectangle rect = new Rectangle(5, 10);
        Square sq = new Square(5);

        printShapeArea(rect);
        rect.setWidth(7);
        printShapeArea(rect);

        printShapeArea(sq);
        sq.setSide(6);
        printShapeArea(sq);
    }
}
