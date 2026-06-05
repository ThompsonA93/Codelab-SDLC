# Tasklist - Java

- [Tasklist - Java](#tasklist---java)
  - [Toolkit](#toolkit)
    - [Java](#java)
    - [Apache Maven](#apache-maven)
    - [Jetbrains IntelliJ](#jetbrains-intellij)
  - [Coding with Java](#coding-with-java)
    - [General Syntax and Data Types](#general-syntax-and-data-types)
    - [Object Oriented Programming and Creational Design Patterns](#object-oriented-programming-and-creational-design-patterns)
    - [Generics, Data Structures and Structural Design Patterns](#generics-data-structures-and-structural-design-patterns)
    - [Streams and Lambda Expressions](#streams-and-lambda-expressions)
    - [Concurrent Programming and Design Patterns](#concurrent-programming-and-design-patterns)
    - [Network Programming and Behavioral Design Patterns](#network-programming-and-behavioral-design-patterns)
    - [Security and Cryptography](#security-and-cryptography)


## Toolkit

### Java 
- Explain the following components of Java and how they use other components.
    - Java Compiler `javac`
    - Java Virtual Machine (JVM)
    - Java Runtime Environment (JRE)
    - Java Application Launcher
- How do JPMS, Java APIs and JLink work together?
- How does the Java Debugger `jdb` work?
- Using `javac HelloWorld.java`, we can compile the following Java code. But what exactly happens when we do `javac`?
    ```java
    public class HelloWorld{
        public static void main(String[] args){
            System.out.println("Hello World!");
        }
    }
    ```
- Using `java` we can run a Java program. But what is the input for the `java` command?


### Apache Maven 

- What is Maven used for?
- Which configuration language does Maven use?
- Explain the 3 default goals.
- What is the Super POM?
- Write a minimal Maven-Configuration for Java v21 that uses JUnit. Explain each block in detail.

### Jetbrains IntelliJ

- What is an IDE and why should developers use one?
- What is the IDE IntelliJ capable of?

## Coding with Java


### General Syntax and Data Types
- What is a primitive data type in comparison with a complex data type?
- What happens when you run `byte b = (byte) 300;`? Explain in depth why the result is 44.
- How are `byte`, `short`, `int` and `long` related to eachother?
- Floating point variables, `float` and `double`, follow the IEEE 754 standard. Explain the standard. 
- What are `boolean` types used for?
- True or false? 
  - A `String` is merely an array of `char`.
  - Java does not support the use of unsigned integer values.
  - A `short` can be cast to an `int`, but an `int` cannot be cast to a `short`.
  - A `char` can always be cast to an `int`, representing a character as number.
  - Booleans use 'True' or 'False', expressed in 1 Bit. Hence they use 1 Bit, not 1 Byte.
- Which of the following is a valid declaration of a `double` variable?
  - `double num = 5.0;`
  - `double num = 5;`
  - `double num = 5d;`
  - `double num = 5f;`
- What are the differences between Do-While, While, For and For-Each?
- What is true about the default case in a switch statement?
  - It is mandatory within any switch blocks.
  - It must be placed last
  - It does not require a break-statement within it's block
- Error handling can be implemented in various ways. By example of the three following methods, what are their pros and cons?
    ```java
    public static int checkArrayOne(int[] array) {
        if (array == null) {
            return -1; 
        }
        return array.length;
    }
    public static int checkArrayTwo(int[] array) throws InvalidParameterException {
        if (array == null) {
            throw new InvalidParameterException("Array cannot be null (Checked Exception thrown).");
        }
        return array.length;
    }
    public static int checkArrayThree(int[] array) throws InvalidParameterException {
        try {
            return array.length; 
        } catch (NullPointerException e) {
            throw new InvalidParameterException("Array cannot be null (Caught NullPointer and re-thrown Checked Exception).");
        }
    }
    ```
- Bitwise Operations are among the fastest a computer can do. Explain what the following code does.
    ```java
    public class BitwiseExample {
        public static void main(String[] args) {
            int a = 120;
            int b = 45;

            if( ((a & ~b) | (~a & b)) != 0 ){
                a = a ^ b;
                b = a ^ b;
                a = a ^ b;
            }
            System.out.println("a = " + a + ", b = " + b);
        }
    }
    ```



### Object Oriented Programming and Creational Design Patterns
- Explain the differences between and use cases for `Record`, `Class`, `Enum`, `Interface` in Java.
- In regards to the previous question, what do the terms `override`, `abstract`, `implements`, `extends` and `super` do?
- Explain the differences between `Polymorphism`, `Inheritance`, and `Abstraction` using a UML class diagram for `Shape`, `Rectangle`, and `Circle`. Assume that `Shape` implements the method `getArea()`.
- By example of writing the classes `CatOne`, `CatTwo`, `CatThree` that extend or inherit from the code below, what are the differences between inheriting from `abstract Class`, `Class` and `Interface`?
    ```java
    class AnimalOne {
        public void makeSound() {
            System.out.println("Animal makes a sound");
        }
    }

    abstract class AnimalTwo {
        public abstract void makeSound();
        public void sleep() {
            System.out.println("Animal is sleeping.");
        }
    }

    interface AnimalThree {
        void makeSound();
        default void eat() {
            System.out.println("AnimalThree: The animal is eating.");
        }
    }
    ```
- What is a `sealed` class? When should a class be `sealed`?
- What is a `functional` interface? When should an interface be `functional``?
- Which of the following is true about interfaces in Java?
  - An interface can have instance variables.
  - An interface can have constructors.
  - An interface can implement another interface.
  - An interface can extend a class.
- Encapsulation is about bundling data and methods appropriately. Which keywords are used to encapsulate data or methods in Java?
- `Integer`, `Character`, `Arrays` and `String` are among some of the built-in objects to use and programm with. Explain why they are necessary.
- Creational design patterns in Java are essential for managing the complexities of object creation in software design. Create a concept and programm the following:
    - Singleton for the class `DatabaseConnection`
    - Factory for the class `ShapeCreator`, which creates `Triangle` and `Square`.
    - Builder for the class `House`, with an appropriate set of methods.
- Which benefits and downsides do Builder-Patterns have in comparison with traditional class constructors?
- For the following scenarios, describe which creational design pattern would be appropriate and implement your suggestion in Java.
  - We have a class ''Appartment'' that is created over multiple steps.
  - We have one class ''Toolbox'' that we want to create multiple times with different toolsets.
  - We have a class ''NameNode'' which we want to have only once in the entire system.
  - We have a class ''WorkerNode'' and we want multiple Nodes. Given different configuration setups, we create them piece by piece.

### Generics, Data Structures and Structural Design Patterns

- Data structures provide a systematic way to store, retrieve, and manipulate data, enabling developers to organize data efficiently within a program.
Aside Arrays, the most common data structures are `Lists`, `Maps`, and `Trees`. Describe their differences.
- Most data structures implement Generics to allow the organization of variable data types. Analyze the following program and explain what `T` stands for and what `Box` does.
    ```java
    public class Box<T> {
        private T content;

        public Box(T content) {
            this.content = content;
        }

        public T getContent() {
            return content;
        }

        public void setContent(T content) {
            this.content = content;
        }

        @Override
        public String toString() {
            return "Box{" +
                    "content=" + content +
                    '}';
        }

        public static void main(String[] args) {
            Box<Integer> integerBox = new Box<>(123);
            System.out.println("Integer Box: " + integerBox.getContent());

            Box<String> stringBox = new Box<>("Hello, Generics!");
            System.out.println("String Box: " + stringBox.getContent());

            stringBox.setContent("New Content");
            System.out.println("Updated String Box: " + stringBox.getContent());
        }
    }
    ```
- Java Collections is a Framework, providing a unified architecture for storing groups of objects, split into interfaces and classes. Shortly explain their differences and use cases:
  - Interfaces: `Collection`, `List`, `Set`, `Queue`, `Deque`, `Map`
  - Classes: `ArrayList`, `LinkedList`, `HashSet`, `LinkedHashSet`, `TreeSet`, `HashMap`, `TreeMap`, `PriorityQueue`.
- Generics can be used for classes or methods. Implement the following methods and classes. The methods can be implemented in any class, or as static methods.
  - `public class ArrayManager<T>`, a class that holds a generic array.
  - `public static <T> void printArray(T[] array)`, which prints the elements in array.
  - `public static <T> T getFirstElement(T[] array)`, which gets the first `T` element of the array.
  - `public class Pair<K, V>`, which takes in two generics and operates on them.
  - `public static double sumOfList(List<? extends Number> list)`, which sums up all values of the list as double.
  - `public interface Comparable<T>`, a interface, which offers the method `int compareTo(T o)`.
  - Create 2 generic classes using one generic variable and generic constructor. Let them implement the interface `Comparable` and program `compareTo` such that the generic variables of these classes can be compared.
- Structural Design Patterns are used to simplify the design of complex systems to make them easier to understand, maintain, and extend. Shortly read about the concepts of Adapter, Composite, Decorator, Proxy, Flyweight, Bridge, Facade
- Flyweights are classified as structural-creational hybrids. What does that mean?
- Explain how the following classes implement the given structural pattern.
    ```java
    public class AdapterPatternExample {
        public static void main(String[] args) {
            String[] array = {"Athos", "Porthos", "Aramis"};
            List<String> list = Arrays.asList(array);
            System.out.println(list);
        }
    }
    ```
    ```java
    public class CompositePatternExample {
        public static void main(String[] args) {
            List<String> list = new ArrayList<>();
            list.add("Element 1");
            list.add("Element 2");
            System.out.println(list);
        }
    }
    ```
    ```java
    public class DecoratorPatternExample {
        public static void main(String[] args) {
            List<String> list = new ArrayList<>();
            list.add("Element 1");
            list.add("Element 2");
            List<String> unmodifiableList = Collections.unmodifiableList(list);
            System.out.println(unmodifiableList);
        }
    }
    ```
    ```java
    public class ProxyPatternExample {
        public static void main(String[] args) {
            List<String> list = new ArrayList<>();
            List<String> proxyList = (List<String>) Proxy.newProxyInstance(
                list.getClass().getClassLoader(),
                list.getClass().getInterfaces(),
                (proxy, method, args1) -> method.invoke(list, args1)
            );
            proxyList.add("Element 1");
            proxyList.add("Element 2");
            System.out.println(proxyList);
        }
    }
    ```
    ```java
    public class FlyweightPatternExample {
        public static void main(String[] args) {
            Integer a = Integer.valueOf(127);
            Integer b = Integer.valueOf(127);
            System.out.println(a == b);
        }
    }
    ```
    ```java
    public class BridgePatternExample {
        public static void main(String[] args) {
            try {
                Connection connection = DriverManager.getConnection("jdbc:mysql://localhost/demo");
                System.out.println("Connection established: " + (connection != null));
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
    ```
    ```java
    public class FacadePatternExample {
        public static void main(String[] args) {
            List<String> list = new ArrayList<>();
            list.add("Element 2");
            list.add("Element 1");
            Collections.sort(list);
            System.out.println(list);
        }
    }
    ```


### Streams and Lambda Expressions

- Streams are sequences of elements from a source, operating with intermediate and terminal operations. What does that mean?
- What does the following code do?
    ```java
    public class Main {
        public static void main(String[] args) {
            List<String> myList = List.of("a", "b", "c");
            Stream<String> stream1 = myList.stream();
            stream1.forEach(System.out::println);

            String[] myArray = {"a", "b", "c"};
            Stream<String> stream2 = Arrays.stream(myArray);
            stream2.forEach(System.out::println);

            Stream<String> stream3 = Stream.of("a", "b", "c");
            stream3.forEach(System.out::println);
        }
    }
    ```
- The most common Lambda Expression include Filtering, Mapping, Reduction, Collection, Grouping, Counting, Finding, Sorting, Joining, Partitioning. Briefly explain each of these approaches.
- Explain what the following code snippets do.
    ```java
    public class LambdaSetExample {
        public static void main(String[] args) {
            Set<Integer> set = new HashSet<>(Arrays.asList(1, 2, 3, 4, 5));
            set.forEach(number -> System.out.println(number));
        }
    }
    ```
    ```java
    public class LambdaMapExample {
        public static void main(String[] args) {
            Map<Integer, String> map = new HashMap<>();
            map.put(1, "one");
            map.put(2, "two");
            map.put(3, "three");
            map.forEach((key, value) -> System.out.println(key + " = " + value));
        }
    }
    ```
    ```java
    public class LambdaFilterExample {
        public static void main(String[] args) {
            List<Integer> originalList = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
            List<Integer> evenNumbers = originalList.stream()
                                                    .filter(n -> n % 2 == 0)
                                                    .collect(Collectors.toList());
            System.out.println(evenNumbers);
        }
    }
    ```
    ```java
    public class LambdaMappingExample {
        public static void main(String[] args) {
            List<Integer> originalList = Arrays.asList(1, 2, 3, 4, 5);
            List<Integer> squares = originalList.stream()
                                                .map(n -> n * n)
                                                .collect(Collectors.toList());
            System.out.println(squares);
        }
    }
    ```
    ```java
    public class LambdaReductionExample {
        public static void main(String[] args) {
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            int sum = numbers.stream()
                            .reduce(0, Integer::sum);
            System.out.println(sum);
        }
    }
    ```
    ```java
    public class LambdaFindExample {
        public static void main(String[] args) {
            List<String> strings = Arrays.asList("apple", "banana", "avocado");
            Optional<String> firstMatch = strings.stream()
                                                .filter(s -> s.startsWith("a"))
                                                .findFirst();
            firstMatch.ifPresent(System.out::println);
        }
    }
    ```
- Java Streams come in different types. Explain the different Input and Outputstreams for the following Classes:
  - Byte Streams
  - File Streams
  - Char Streams
- In comparison to Streams, what do Buffered Streams do?
- Java New Input/Output (NIO) implements streams differently. What is the difference from IO to NIO?
- Set up the following comparison between Data Structures and Streams:
    | Feature     | Data Structure | Stream |
    | ----------- | -------------- | ------ |
    | Use Case    |                |        |
    | Performance |                |        |
    | Complexity  |                |        |
    | Mutability  |                |        |
    | Concurrency |                |        |
    | Readability |                |        |
    | Flexibility |                |        |
- Lambda Expressions can be used with functional interfaces. Explain how the following code works.
    ```java
    @FunctionalInterface
    interface Calculator {
        int calculate(int a, int b);
    }

    public class Main {
        public static void main(String[] args) {
            Calculator addition = (a, b) -> a + b;
            System.out.println("Sum: " + addition.calculate(5, 3));
        }
    }
    ```
- Complete the implementation for the following code snippets.
    ```java
    @FunctionalInterface
    interface SimpleOperation {
        void operate(SimpleObject obj);
    }

    class SimpleObject {
        // TODO
    }

    public class Main {
        public static void main(String[] args) {
            SimpleOperation operation = // FIXME
            SimpleObject obj = // FIXME
            operation.operate(obj);
        }
    }
    ```
    ```java
    public class Main {
        public static void main(String[] args) {
            List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");
            Predicate<String> startsWithA = (name) -> name.startsWith("A");
            names. // FIXME
        }
    }
    ```

### Concurrent Programming and Design Patterns

- Concurrency and Parallelism is often used synonymously, but actually describe different aspects. Explain their difference.
- What is the difference between a Thread and a Process?
- Concurrent programs usually implement the keywords `synchronized` and `volatile`, but what do they mean? 
- A Thread is implemented using the `Runnable` interface, the `Thread` class, or by use of Lambda expression. Explain the differences between the following code snippets.
    ```java
    public class MyRunnable implements Runnable {
        @Override
        public void run() {
            System.out.println("Thread is running");
        }

        public static void main(String[] args) {
            MyRunnable myRunnable = new MyRunnable();
            Thread thread = new Thread(myRunnable);
            thread.start();
        }
    }
    ```
    ```java
    class MyThread extends Thread {
        public void run() {
            System.out.println("Thread is running.");
        }
    }

    public class Main {
        public static void main(String[] args) {
            MyThread thread = new MyThread();
            thread.start(); 
            try {
                thread.join(); 
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("Thread has finished.");
        }
    }
    ```
    ```java
    public class Main {
        public static void main(String[] args) {
            Runnable runnable = () -> System.out.println("Lambda Runnable is running.");
            Thread thread = new Thread(runnable);
            thread.start();
        }
    }
    ```
- What exactly does 'Forking' and 'Joining' Threads mean? Give an example.
- What are Pro's and Con's of implementing `Thread` instead of `Runnable`?
- `java.util.concurrent` contains code to use for concurrent programming. Lookup the following terms and concepts: `ExecutorService`, `Future<V>`, `Callable<V>`, `Delayed`, `LinkedBlockingQueue<E>`, `Semaphore`, `CyclicBarrier`, `CountDownLatch`, `ForkJoinPool`
- Explain what the following code does.
    ```java
    public class ConcurrentExample {
        public static void main(String[] args) {
            ExecutorService executor = Executors.newFixedThreadPool(5);
            for (int i = 0; i < 10; i++) {
                int taskId = i;
                executor.submit(() -> {
                    System.out.println("Task " + taskId + " is running on " + Thread.currentThread().getName());
                    try {
                        TimeUnit.SECONDS.sleep(2);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                    System.out.println("Task " + taskId + " is completed on " + Thread.currentThread().getName());
                });
            }

            executor.shutdown();
            try {
                if (!executor.awaitTermination(60, TimeUnit.SECONDS)) {
                    executor.shutdownNow();
                }
            } catch (InterruptedException e) {
                executor.shutdownNow();
            }
        }
    }
    ```
- Create an overview for the following comparison between Runnable and Concurrent.
    | Feature             | Runnable | Concurrent |
    | ------------------- | -------- | ---------- |
    | Purpose             |          |            |
    | Usage               |          |            |
    | Thread Creation     |          |            |
    | Concurrency Control |          |            |
    | Task management     |          |            |
    | Complexity          |          |            |
    | Memory Management   |          |            |
    | Error Handling      |          |            |
    | Scalability         |          |            |
    | Performance         |          |            |
    | Flexibility         |          |            |
- How do the following data structures differ?
  - `ConcurrentHashMap` and `CopyOnWriteArrayList`
  - `ConcurrentLinkedQueue` and `BlockingQueue`
- How does the following code distribute work and perform the tasks?
    ```java
    public class ParallelStreamExample {
        public static void main(String[] args) {
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

            List<Integer> squaredNumbers = numbers.parallelStream()
                                                .filter(number -> number % 2 == 0)
                                                .map(number -> number * number)
                                                .collect(Collectors.toList());

            squaredNumbers.forEach(number -> System.out.println(number + " processed by " + Thread.currentThread().getName()));
        }
    }
    ```
- What is a Data Dependency and why is it a problem in concurrent programming?
- Explain the potential issue arising in the following code example.
    ```java
    public class ConcurrentIssueExample {
        private int counter = 0;

        public static void main(String[] args) {
            ConcurrentIssueExample example = new ConcurrentIssueExample();
            example.runExample();
        }

        public void runExample() {
            Thread thread1 = new Thread(() -> {
                for (int i = 0; i < 1000; i++) {
                    incrementCounter();
                }
            });

            Thread thread2 = new Thread(() -> {
                for (int i = 0; i < 1000; i++) {
                    incrementCounter();
                }
            });

            thread1.start();
            thread2.start();

            try {
                thread1.join();
                thread2.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            System.out.println("Final counter value: " + counter);
        }

        private void incrementCounter() {
            counter++;
        }
    }
    ```
- What is a Deadlock? Where does it occur in the following code example?
    ```java
    class Resource {
        public synchronized void method1(Resource resource) {
            System.out.println(Thread.currentThread().getName() + " entered method1");
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(Thread.currentThread().getName() + " trying to call method2");
            resource.method2(this);
        }

        public synchronized void method2(Resource resource) {
            System.out.println(Thread.currentThread().getName() + " entered method2");
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(Thread.currentThread().getName() + " trying to call method1");
            resource.method1(this);
        }
    }

    public class DeadlockExample {
        public static void main(String[] args) {
            final Resource resource1 = new Resource();
            final Resource resource2 = new Resource();

            Thread thread1 = new Thread(() -> resource1.method1(resource2), "Thread-1");
            Thread thread2 = new Thread(() -> resource2.method1(resource1), "Thread-2");

            thread1.start();
            thread2.start();
        }
    }
    ```
- Concurrent Design Patterns resolve around how resources are shared, procedures are locked and unlocked. In the context of Java, briefly explain the following Patterns.
    - Thread-Pool Pattern
    - Producer-Consumer Pattern
    - Future and Promise Pattern
    - Read-Write-Lock Pattern
    - Balking Pattern
    - Scheduler Pattern
    - Monitor-Object Pattern


### Network Programming and Behavioral Design Patterns

- Programming networks depend on many different Standards and RFCs (Request for Comments). Read and document what the following Standards or RFCs describe:
  - RFC 768
  - RFC 793
  - RFC 8446
  - ISO/IEC 11801
  - IEEE 802.11 (a,b,g,n,ac)
- The ISO/OSI and TCP/IP Model represent how networking software should process information over the network. What are their differences?
- Networks are differentiated between PAN, LAN, MAN, WAN and GAN. Where and when are each of them applied?
- Configurations for a router include mechanisms such as SSID, WEP, WPA, WPA2, MAC-Addressfilter. What are these used for?
- A URL consists of schema, domain, port, path and optional parameters. Explain what is what given the following URLs.
  - ftp://public.ftp-servers.example.com/mydirectory/myfile.txt
  - http://www.example.com/index.html
  - jdbc:cassandra://127.0.0.1:9042/myKeyspace
  - https://example.com/page-a\#CloudComputing
  - jdbc:postgresql://localhost/myBiz
  - mailto:johndoe@fakeemail.com
  - sms:+19999999999\&body=Hello!
- Ports are numeric representations, stored in `C:\Windows\System32\drivers\etc\services` or `/etc/services`, pending on the operating system in use. But what do they describe?
- IP Addresses are usually represented as a full address or as address space in CIDR notation. But what does an IP Address Space actually represent?
- What is Unicast, Multicast and Broadcast?
- There is a select set of IP-addresses that have a specific use case. What do the following do?
    - 127.0.0.0/8,       
    - 169.254.0.0./16,     
    - 192.0.0.0/24,       
    - 192.168.0.0./16     
    - 224.0.0.0/4         

### Security and Cryptography



