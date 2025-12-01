package at.thauer.solid.liskovsubstitution.antipattern;

public class GeoShaper {
    public static void resizeRectangle(Rectangle r) {
        r.setWidth(5);
        r.setHeight(4);
        System.out.println("Expected Area: 5 * 4 = 20");
        System.out.println("Actual Area: " + r.getArea());
    }

    static void main(String[] args) {
        Rectangle rect = new Rectangle();
        resizeRectangle(rect);
        // Output: Actual Area: 20

        Rectangle square = new Square();
        resizeRectangle(square);
    }
}
