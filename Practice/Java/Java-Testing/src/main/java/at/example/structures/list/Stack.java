package at.example.structures.list;

import at.example.api.ICollection;
import at.example.core.UnaryVertex;

import java.util.NoSuchElementException;

public class Stack implements ICollection {
    private UnaryVertex top;
    private int size;

    public Stack() {
        this.top = null;
        this.size = 0;
    }


    public void push(String elementValue) {
        UnaryVertex newTop = new UnaryVertex(elementValue, this.top);
        this.top = newTop;
        this.size++;
    }

    public String pop() {
        if (size == 0) {
            throw new NoSuchElementException("Cannot pop from an empty stack.");
        }

        String value = this.top.getValue();
        UnaryVertex oldTop = this.top;
        this.top = this.top.getNext();

        oldTop.setNext(null);

        this.size--;
        return value;
    }

    public String peek() {
        if(isEmpty()){
            throw new NoSuchElementException("Cannot peek into empty stack.");
        }
        return this.top.getValue();
    }

    @Override
    public int size() {
        return this.size;
    }

    @Override
    public boolean isEmpty() {
        return top == null;
    }

    @Override
    public void clear() {
        this.top = null;
    }

    public UnaryVertex getTop() {
        return top;
    }

    public void setTop(UnaryVertex top) {
        this.top = top;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }
}