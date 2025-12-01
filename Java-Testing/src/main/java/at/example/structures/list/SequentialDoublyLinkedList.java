package at.example.structures.list;

import at.example.api.ICollection;
import at.example.core.BinaryVertex;

import java.util.NoSuchElementException;

/**
 * Doubly linked list implemented using BinaryVertex.
 * BinaryVertex.left maps to 'prev', BinaryVertex.right maps to 'next'.
 */
public class SequentialDoublyLinkedList implements ICollection {
    private BinaryVertex head;
    private BinaryVertex tail;
    private int size;

    public SequentialDoublyLinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    public void addFirst(String value) {
        BinaryVertex newNode = new BinaryVertex(value);

        if (head == null) {
            head = newNode;
            tail = newNode;
        } else {
            newNode.setRight(head);
            head.setLeft(newNode);
            head = newNode;
        }
        size++;
    }

    public void addLast(String value){

    }

    public boolean removeFirst() {
        if (size == 0) {
            throw new NoSuchElementException("List is empty.");
        }
        String value = head.getValue();

        if (head == tail) {
            head = null;
            tail = null;
        } else {
            BinaryVertex oldHead = head;
            head = head.getRight();
            head.setLeft(null);
            oldHead.setRight(null);
        }
        size--;
        return true;
    }

    public boolean removeLast(){

        return true;
    }

    public String get(int index){

        return null;
    }

    public String insertAt(int index, String value){

        return null;
    }

    public boolean remove(int index){

        return false;
    }

    public boolean contains(String value){

        return false;
    }


    @Override
    public int size() {
        return this.size;
    }

    @Override
    public boolean isEmpty() {
        return this.size == 0;
    }

    @Override
    public void clear() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}
