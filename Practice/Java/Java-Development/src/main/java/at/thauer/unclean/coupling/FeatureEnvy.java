package at.thauer.unclean.coupling;

public class FeatureEnvy {

    public double calculatePerimeter(Rectangle rectangle) {

        double w = rectangle.getWidth();
        double h = rectangle.getHeight();

        System.out.println("Calculating perimeter using external data.");

        double perimeter = 2 * w + 2 * h;

        return perimeter;
    }

    public double calculateArea(Rectangle rectangle) {
        double area = rectangle.getWidth() * rectangle.getHeight();
        return area;
    }

    public static void main(String[] args) {
        Rectangle box = new Rectangle(10.0, 5.0);
        FeatureEnvy processor = new FeatureEnvy();

        double p = processor.calculatePerimeter(box);
        double a = processor.calculateArea(box);

        System.out.println("Rectangle: W=10, H=5");
        System.out.println("Perimeter (Calculated externally): " + p);
        System.out.println("Area (Calculated externally): " + a);
    }
}