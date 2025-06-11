import { QuizQuestion } from "./type";
export const oopJavaQuestions: QuizQuestion[] = [{
  "id": 1,
  "question": "What is a class in Java?",
  "options": [
    "A built-in data type",
    "A blueprint for creating objects",
    "A collection of methods",
    "An instance of an object"
  ],
  "correctAnswer": 1,
  "level": "beginner"
},
{
  "id": 2,
  "question": "Which statement correctly creates an object in Java?",
  "options": [
    "Student s = Student();",
    "Student s = new.Student();",
    "Student s = new Student();",
    "Student s = create Student();"
  ],
  "correctAnswer": 2,
  "level": "beginner"
},
{
  "id": 3,
  "question": "Which principle of OOP encapsulates data and methods within a class?",
  "options": [
    "Inheritance",
    "Polymorphism",
    "Encapsulation",
    "Abstraction"
  ],
  "correctAnswer": 2,
  "level": "beginner"
},
{
  "id": 4,
  "question": "What is the primary purpose of getters and setters in Java?",
  "options": [
    "To save memory",
    "To make the code run faster",
    "To control access to class variables",
    "To eliminate the need for constructors"
  ],

  "correctAnswer": 2,
  "level": "beginner"
},
{
  "id": 5,
  "question": "What is the primary purpose of a constructor in Java?",
  "options": [
    "To calculate class-level constants",
    "To destroy objects when they are no longer needed",
    "To initialize the state of newly created objects",
    "To define the methods an object can execute"
  ],
  "correctAnswer": 2,
  "level": "beginner"
},
{
  "id": 6,
  "question": "What happens if you don't provide any constructor in a Java class?",
  "options": [
    "Compilation error occurs",
    "Java creates a default constructor automatically",
    "Objects of that class cannot be created",
    "All fields must be initialized at declaration"
  ],
  "correctAnswer": 1,
  "level": "beginner"
},
{
  "id": 7,
  "question": "What does the 'this' keyword refer to in Java?",
  "options": [
    "The parent class",
    "The current instance of the class",
    "The main method",
    "The Java Virtual Machine"
  ],
  "correctAnswer": 1,
  "level": "beginner"
},
{
  "id": 8,
  "question": "Which keyword is used to inherit from a class in Java?",
  "options": [
    "implements",
    "extends",
    "inherits",
    "using"
  ],

  "correctAnswer": 1,
  "level": "beginner"
},
{
  "id": 9,
  "question": "In Java, which of the following is true about method overriding?",
  "options": [
    "Overridden methods must have different return types",
    "Overridden methods must have different parameters",
    "Overridden methods must have the same name and parameters",
    "Methods can only be overridden in the same class"
  ],
  "correctAnswer": 2,
  "level": "beginner"
},
{
  "id": 10,
  "question": "What does it mean when a method or class is declared as 'final'?",
  "options": [
    "It can be accessed from any package",
    "It is the last method to be executed in the program",
    "It cannot be extended or overridden",
    "It must be called before any other method"
  ],
  "correctAnswer": 2,
  "level": "beginner"
},
{
  "id": 11,
  "question": "What is the main difference between method overloading and method overriding?",
  "options": [
    "Overloading occurs in the same class, overriding occurs in a subclass",
    "Overloading changes return type, overriding changes method name",
    "Overloading uses different parameters, overriding must use the same parameters",
    "Overloading is a compile-time concept, overriding is always determined at runtime"
  ],
  "correctAnswer": 0,
  "level": "intermediate"
},
{
  "id": 12,
  "question": "What is constructor chaining in Java?",
  "options": [
    "Creating multiple constructors with different parameters",
    "Calling one constructor from another constructor in the same class",
    "A constructor calling methods in sequence",
    "Inheriting constructors from a parent class"
  ],

  "correctAnswer": 1,
  "level": "intermediate"
},
{
  "id": 13,
  "question": "How can you call a constructor of the same class from another constructor?",
  "options": [
    "Using the 'super' keyword",
    "Using the 'new' keyword",
    "Using the 'this' keyword",
    "Using the class name"
  ],
  "correctAnswer": 2,
  "level": "intermediate"
},
{
  "id": 14,
  "question": "What happens to the constructors during inheritance?",
  "options": [
    "Constructors are automatically inherited",
    "Constructors are never inherited",
    "Only parameterized constructors are inherited",
    "Only default constructors are inherited"
  ],
  "correctAnswer": 1,
  "level": "intermediate"
},
{
  "id": 15,
  "question": "Which concept allows a variable of a parent class to refer to an object of a child class?",
  "options": [
    "Encapsulation",
    "Abstraction",
    "Polymorphism",
    "Method overloading"
  ],
  "correctAnswer": 2,
  "level": "intermediate"
},
{
  "id": 16,
  "question": "What is dynamic method dispatch in Java?",
  "options": [
    "A way to call multiple methods at once",
    "The process of calling a method at compile time",
    "The process of resolving a method call at runtime based on the object type",
    "A technique to create multiple instances of a method"
  ],

  "correctAnswer": 2,
  "level": "intermediate"
},
{
  "id": 17,
  "question": "Which is a valid way to declare an abstract class in Java?",
  "options": [
    "abstract public class MyClass { }",
    "abstract public class MyClass extends Object { }",
    "public abstract class MyClass { }",
    "All of the above"
  ],
  "correctAnswer": 3,
  "level": "intermediate"
},
{
  "id": 18,
  "question": "What is the key difference between an abstract class and an interface in Java?",
  "options": [
    "Abstract classes can have constructors, interfaces cannot",
    "Interfaces can have fields, abstract classes cannot",
    "Abstract classes support multiple inheritance, interfaces do not",
    "Interfaces can have method implementations, abstract classes cannot"
  ],
  "correctAnswer": 0,
  "level": "intermediate"
},
{
  "id": 19,
  "question": "What is a non-static nested class in Java called?",
  "options": [
    "Member class",
    "Inner class",
    "Local class",
    "Nested class"
  ],
  "correctAnswer": 1,
  "level": "intermediate"
},
{
  "id": 20,
  "question": "What is the main characteristic of a static nested class?",
  "options": [
    "It cannot access non-static members of the enclosing class",
    "It cannot be instantiated",
    "It can only access static members of any class",
    "It must extend the outer class"
  ],

  "correctAnswer": 0,
  "level": "intermediate"
},
{
  "id": 21,
  "question": "How does Java support multiple inheritance?",
  "options": [
    "Through extending multiple classes",
    "By using the implements keyword multiple times",
    "By implementing multiple interfaces",
    "Through the 'with' keyword"
  ],
  "correctAnswer": 2,
  "level": "intermediate"
},
{
  "id": 22,
  "question": "Which access modifier must be used for overriding a method?",
  "options": [
    "The same or a more restrictive access modifier",
    "The same or a less restrictive access modifier",
    "Exactly the same access modifier",
    "Any access modifier can be used"
  ],
  "correctAnswer": 1,
  "level": "intermediate"
},
{
  "id": 23,
  "question": "What is the output when a method is overridden and a parent class reference points to a child class object?",
  "options": [
    "Parent class method is called",
    "Child class method is called",
    "Compilation error occurs",
    "Runtime error occurs"
  ],
  "correctAnswer": 1,
  "level": "intermediate"
},
{
  "id": 24,
  "question": "What is method hiding in Java?",
  "options": [
    "Overriding a private method",
    "Declaring a method in a subclass with the same signature as a static method in the superclass",
    "Using access modifiers to restrict method access",
    "Changing method parameters to make them inaccessible"

  ],
  "correctAnswer": 1,
  "level": "intermediate"
},
{
  "id": 25,
  "question": "Which of the following cannot be declared abstract in Java?",
  "options": [
    "Class",
    "Method",
    "Constructor",
    "Interface"
  ],
  "correctAnswer": 2,
  "level": "intermediate"
},
{
  "id": 26,
  "question": "What is a covariant return type in Java?",
  "options": [
    "A return type that is exactly the same as the parent method's return type",
    "A return type that is a subclass of the parent method's return type",
    "A return type that can be any type",
    "A return type that must be void"
  ],
  "correctAnswer": 1,
  "level": "advanced"
},
{
  "id": 27,
  "question": "What is an anonymous inner class in Java?",
  "options": [
    "A class without a name that is defined and instantiated in a single statement",
    "A class that cannot be accessed by name",
    "A class with all anonymous methods",
    "A class that is automatically generated by the JVM"
  ],
  "correctAnswer": 0,
  "level": "advanced"
},
{
  "id": 28,
  "question": "Which Java feature introduced in Java 16 provides a concise way to declare immutable data classes?",
  "options": [
    "Data classes",
    "Records",
    "Immutables",

    "Value objects"
  ],
  "correctAnswer": 1,
  "level": "advanced"
},
{
  "id": 29,
  "question": "What is a marker interface in Java?",
  "options": [
    "An interface with only constant declarations",
    "An interface with no methods or constants",
    "An interface that extends multiple interfaces",
    "An interface with only default methods"
  ],
  "correctAnswer": 1,
  "level": "advanced"
},
{
  "id": 30,
  "question": "Which feature was introduced in Java 8 that allows interfaces to have method implementations?",
  "options": [
    "Abstract methods",
    "Default methods",
    "Static interface methods",
    "Virtual methods"
  ],
  "correctAnswer": 1,
  "level": "advanced"
},
{
  "id": 31,
  "question": "What happens when a class implements two interfaces that both declare the same default method?",
  "options": [
    "The class won't compile unless it overrides the default method",
    "The method from the first interface in the implements clause is used",
    "The method from the second interface in the implements clause is used",
    "Runtime error occurs when the method is called"
  ],
  "correctAnswer": 0,
  "level": "advanced"
},
{
  "id": 32,
  "question": "What is the diamond problem in multiple inheritance?",
  "options": [
    "When a class inherits from two classes that both inherit from a common superclass",

    "When a class implements multiple interfaces with the same method names",
    "When a class has methods arranged in a diamond pattern",
    "When two classes inherit from each other creating a cycle"
  ],
  "correctAnswer": 0,
  "level": "advanced"
},
{
  "id": 33,
  "question": "What is a sealed class in Java?",
  "options": [
    "A class that cannot be instantiated",
    "A final class that cannot be extended",
    "A class that restricts which classes can extend it",
    "A class with encrypted source code"
  ],
  "correctAnswer": 2,
  "level": "advanced"
},
{
  "id": 34,
  "question": "Which of the following methods from the Object class cannot be overridden?",
  "options": [
    "toString()",
    "equals(Object obj)",
    "wait()",
    "finalize()"
  ],
  "correctAnswer": 2,
  "level": "advanced"
},
{
  "id": 35,
  "question": "What is the main purpose of the 'Liskov Substitution Principle' in object-orientedprogramming?",
  "options": [
    "To ensure that all objects can be treated as their parent types",
    "To guarantee that subclasses can be substituted for their base classes without altering program correctness",
    "To enforce the use of polymorphism in all class hierarchies",
    "To prevent method overriding in subclasses"
  ],
  "correctAnswer": 1,
  "level": "advanced"
}
]