package at.example.algorithms.join;

import at.example.core.UnaryVertex;
import at.example.structures.list.Stack;

public class StackJoiner {
    public static Stack join(Stack stackA, Stack stackB) {

        if (stackB.isEmpty()) {
            return stackA;
        }

        if(stackA.isEmpty()){
            return stackB;
        }

        UnaryVertex current = stackA.getTop();
        while (current.getNext() != null) {
            current = current.getNext();
        }
        current.setNext(stackB.getTop());

        Stack resultStack = new Stack();
        resultStack.setTop(stackA.getTop());
        resultStack.setSize(stackA.size() + stackB.size());

        return resultStack;
    }
}
