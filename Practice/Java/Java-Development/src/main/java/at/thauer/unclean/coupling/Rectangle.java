package at.thauer.unclean.coupling;

public class Rectangle {
    double width;
    double height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    public void validateDimensions() {
        if (width <= 0 || height <= 0) {
            throw new IllegalArgumentException("Dimensions must be positive.");
        }
    }

    public double getWidth() {
        return width;
    }

    public double getHeight() {
        return height;
    }
}