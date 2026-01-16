package at.thauer.unclean.coupling;

public class InappropriateIntimacy {

    public void scaleRectangle(Rectangle rectangle, double factor) {
        rectangle.width *= factor;
        rectangle.height *= factor;
    }

    public static void main(String[] args) {
        Rectangle myBox = new Rectangle(10.0, 5.0);
        InappropriateIntimacy scaler = new InappropriateIntimacy();

        System.out.println("Initial Dimensions: " + myBox.getWidth() + "x" + myBox.getHeight());
        scaler.scaleRectangle(myBox, 2.0);
        System.out.println("Final Dimensions: " + myBox.getWidth() + "x" + myBox.getHeight());
    }
}