// File: src/components/learning/quizData.ts

export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    level: 'beginner' | 'intermediate' | 'advanced';
  }
  
  // Java Questions
  export const javaQuestions: QuizQuestion[] = [
    // Beginner questions (first 20)
    {
      id: 1,
      question: "What type of language is Java?",
      options: [
        "Markup language",
        "Low-level",
        "High-level, object-oriented",
        "Machine code"
      ],
      correctAnswer: 2,
      level: 'beginner'
    },
    {
      id: 2,
      question: "What is a class in Java?",
      options: [
        "A file extension",
        "A function",
        "A blueprint for objects",
        "A loop"
      ],
      correctAnswer: 2,
      level: 'beginner'
    },
    {
      id: 3,
      question: "What is a method in Java?",
      options: [
        "A data type",
        "A set of statements that perform a task",
        "A file",
        "A class"
      ],
      correctAnswer: 1,
      level: 'beginner'
    },
    {
      id: 4,
      question: "What does the main method do in Java?",
      options: [
        "Defines a class",
        "Starts the execution",
        "Stores variables",
        "Reads input"
      ],
      correctAnswer: 1,
      level: 'beginner'
    },
    {
      id: 5,
      question: "What is an object in Java?",
      options: [
        "A data type",
        "An instance of a class",
        "A keyword",
        "A variable"
      ],
      correctAnswer: 1,
      level: 'beginner'
    },
    {
      id: 6,
      question: "Which file extension is used for compiled Java code?",
      options: [
        ".java",
        ".class",
        ".exe",
        ".jar"
      ],
      correctAnswer: 1,
      level: 'beginner'
    },
    {
      id: 7,
      question: "What happens if you miss a semicolon ; in Java?",
      options: [
        "Code runs normally",
        "Runtime error",
        "Compilation error",
        "It auto-fixes"
      ],
      correctAnswer: 2,
      level: 'beginner'
    },
    {
      id: 8,
      question: "Why are data types used in Java?",
      options: [
        "To run programs faster",
        "To declare exceptions",
        "To define kind of data a variable can hold",
        "To create loops"
      ],
      correctAnswer: 2,
      level: 'beginner'
    },
    {
      id: 9,
      question: "What is the purpose of the new keyword in Java?",
      options: [
        "To define a variable",
        "To create a new method",
        "To create an object",
        "To end a loop"
      ],
      correctAnswer: 2,
      level: 'beginner'
    },
    {
      id: 10,
      question: "Which of the following is not a Java primitive type?",
      options: [
        "byte",
        "boolean",
        "string",
        "char"
      ],
      correctAnswer: 2,
      level: 'beginner'
    },
    {
      id: 11,
      question: "Which loop is guaranteed to execute at least once?",
      options: [
        "for",
        "while",
        "do-while",
        "foreach"
      ],
      correctAnswer: 2,
      level: 'beginner'
    },
    {
      id: 12,
      question: "What is the default return type of constructor?",
      options: [
        "int",
        "void",
        "no return type",
        "class name"
      ],
      correctAnswer: 2,
      level: 'beginner'
    },
    {
      id: 13,
      question: "Which data type is used to store true or false?",
      options: [
        "int",
        "boolean",
        "char",
        "double"
      ],
      correctAnswer: 1,
      level: 'beginner'
    },
    {
      id: 14,
      question: "Which of these is a Java primitive type?",
      options: [
        "String",
        "Integer",
        "double",
        "Scanner"
      ],
      correctAnswer: 2,
      level: 'beginner'
    },
    {
      id: 15,
      question: "What happens if no break is used in a switch-case?",
      options: [
        "It throws an error",
        "Only default runs",
        "All cases run after a match (fall-through)",
        "Nothing happens"
      ],
      correctAnswer: 2,
      level: 'beginner'
    },
    {
      id: 16,
      question: "Which statement is true about String in Java?",
      options: [
        "It is a primitive type",
        "It is mutable",
        "It is immutable",
        "It is an interface"
      ],
      correctAnswer: 2,
      level: 'beginner'
    },
    {
      id: 17,
      question: "How do you declare an array of integers in Java?",
      options: [
        "int arr[];",
        "int[] arr;",
        "int arr[] = new int[5];",
        "All of the above"
      ],
      correctAnswer: 3,
      level: 'beginner'
    },
    {
      id: 18,
      question: "What happens if you access an index beyond the array size?",
      options: [
        "It returns null",
        "It compiles but fails later",
        "ArrayIndexOutOfBoundsException",
        "Fills with 0"
      ],
      correctAnswer: 2,
      level: 'beginner'
    },
    {
      id: 19,
      question: "Which of the following is true about constructors?",
      options: [
        "They must have a return type",
        "They must be private",
        "They have the same name as the class",
        "They can be static"
      ],
      correctAnswer: 2,
      level: 'beginner'
    },
    {
      id: 20,
      question: "How is encapsulation implemented in Java?",
      options: [
        "Using abstract classes",
        "Using inheritance",
        "Using private variables and public getters/setters",
        "Using constructors only"
      ],
      correctAnswer: 2,
      level: 'beginner'
    },
    
    // Intermediate questions (next 20)
    {
      id: 21,
      question: "What is the purpose of static keyword?",
      options: [
        "Makes variable immutable",
        "Makes variable global",
        "Makes method/variable belong to class",
        "Increases speed"
      ],
      correctAnswer: 2,
      level: 'intermediate'
    },
    {
      id: 22,
      question: "Which of the following can be static?",
      options: [
        "Variables",
        "Methods",
        "Blocks",
        "All of the above"
      ],
      correctAnswer: 3,
      level: 'intermediate'
    },
    {
      id: 23,
      question: "Which rule applies to overloaded methods?",
      options: [
        "Must differ in name",
        "Must differ in class",
        "Must differ in parameter number or type",
        "Must differ in return type only"
      ],
      correctAnswer: 2,
      level: 'intermediate'
    },
    {
      id: 24,
      question: "Which keyword is used to create a subclass in Java?",
      options: [
        "implements",
        "extends",
        "inherits",
        "this"
      ],
      correctAnswer: 1,
      level: 'intermediate'
    },
    {
      id: 25,
      question: "Which class is the parent of all Java classes?",
      options: [
        "Object",
        "Class",
        "Main",
        "Parent"
      ],
      correctAnswer: 0,
      level: 'intermediate'
    },
    {
      id: 26,
      question: "Can constructors be inherited?",
      options: [
        "Yes",
        "No",
        "Only static ones",
        "Only abstract ones"
      ],
      correctAnswer: 1,
      level: 'intermediate'
    },
    {
      id: 27,
      question: "What is super used for in Java?",
      options: [
        "To create objects",
        "To call superclass constructor or method",
        "To access private variables",
        "To exit a method"
      ],
      correctAnswer: 1,
      level: 'intermediate'
    },
    {
      id: 28,
      question: "What is polymorphism in Java?",
      options: [
        "Using many classes",
        "One interface for multiple classes",
        "One method behaving differently",
        "Method hiding"
      ],
      correctAnswer: 2,
      level: 'intermediate'
    },
    {
      id: 29,
      question: "Can static methods be overridden?",
      options: [
        "Yes",
        "No",
        "Only in abstract classes",
        "Only with final"
      ],
      correctAnswer: 1,
      level: 'intermediate'
    },
    {
      id: 30,
      question: "What must a subclass do when it extends an abstract class?",
      options: [
        "Declare all variables",
        "Make all methods private",
        "Override all abstract methods",
        "Use the final keyword"
      ],
      correctAnswer: 2,
      level: 'intermediate'
    },
    {
      id: 31,
      question: "Can abstract methods have a body in Java?",
      options: [
        "Yes",
        "No",
        "Only in static methods",
        "Only in interfaces"
      ],
      correctAnswer: 1,
      level: 'intermediate'
    },
    {
      id: 32,
      question: "What does the final keyword do for a variable?",
      options: [
        "Makes it static",
        "Prevents it from being reassigned",
        "Makes it global",
        "Allows inheritance"
      ],
      correctAnswer: 1,
      level: 'intermediate'
    },
    {
      id: 33,
      question: "What does final mean when used on a method?",
      options: [
        "The method cannot be called",
        "The method cannot be overridden",
        "The method runs first",
        "The method is abstract"
      ],
      correctAnswer: 1,
      level: 'intermediate'
    },
    {
      id: 34,
      question: "Can a final class be extended?",
      options: [
        "Yes",
        "No",
        "Only by abstract classes",
        "Only by interfaces"
      ],
      correctAnswer: 1,
      level: 'intermediate'
    },
    {
      id: 35,
      question: "Can an interface have method bodies in Java 8+?",
      options: [
        "Yes, using default/static methods",
        "No, never",
        "Only in abstract classes",
        "Only if final"
      ],
      correctAnswer: 0,
      level: 'intermediate'
    },
    {
      id: 36,
      question: "By default, variables declared in an interface are:",
      options: [
        "private and static",
        "public, static, and final",
        "protected and final",
        "non-static and mutable"
      ],
      correctAnswer: 1,
      level: 'intermediate'
    },
    {
      id: 37,
      question: "How many interfaces can a class implement in Java?",
      options: [
        "Only one",
        "Two",
        "Unlimited",
        "One per class"
      ],
      correctAnswer: 2,
      level: 'intermediate'
    },
    {
      id: 38,
      question: "Can interfaces extend other interfaces?",
      options: [
        "No",
        "Yes, using extends",
        "Yes, using implements",
        "Only if they are public"
      ],
      correctAnswer: 1,
      level: 'intermediate'
    },
    {
      id: 39,
      question: "Can a class both extend a class and implement an interface?",
      options: [
        "No, Java doesn't allow it",
        "Yes, using extends for class and implements for interface",
        "Yes, but only one of each",
        "Only if they are abstract"
      ],
      correctAnswer: 1,
      level: 'intermediate'
    },
    {
      id: 40,
      question: "Which interface method modifier is implied by default?",
      options: [
        "private",
        "static",
        "public",
        "final"
      ],
      correctAnswer: 2,
      level: 'intermediate'
    }
  ];