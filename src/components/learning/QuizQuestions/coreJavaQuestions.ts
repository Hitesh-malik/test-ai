import { QuizQuestion } from "./type";
export const coreJavaQuestions: QuizQuestion[] = [
  {
    "id": 1,
    "question": "Which of the following is a valid variable declaration in Java?",
    "options": [
      "int 2count = 10;",
      "float price = 5.5f;",
      "double &rate = 2.5.5;",
      "char @letter = 'A';"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 2,
    "question": "What is the default value of an instance variable of type int in Java?",
    "options": [
      "1",
      "0",
      "null",
      "Undefined"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 3,
    "question": "Which data type takes up 8 bytes of memory in Java?",
    "options": [
      "int",
      "float",
      "short",
      "long"
    ],
    "correctAnswer": 3,
    "level": "beginner"
  },
  {
    "id": 4,
    "question": "Which of the following is not a primitive data type in Java?",
    "options": [
      "boolean",
      "char",
      "String",
      "float"
    ],

    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 5,
    "question": "Which of the following is a correct way to represent a long literal in Java?",
    "options": [
      "123",
      "123L",
      "123l",
      "Both B and C"
    ],
    "correctAnswer": 3,
    "level": "beginner"
  },
  {
    "id": 6,
    "question": "What is the result of 15 % 4 in Java?",
    "options": [
      "3",
      "3.75",
      "4",
      "0"
    ],
    "correctAnswer": 0,
    "level": "beginner"
  },
  {
    "id": 7,
    "question": "Which operator is used for bitwise AND in Java?",
    "options": [
      "&&",
      "&",
      "AND",
      "|"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 8,
    "question": "What happens when the condition in an if statement evaluates to false and no else is present?",
    "options": [
      "The program terminates",
      "The program throws an exception",
      "The code block inside the if statement executes anyway",
      "The program skips the if statement and continues"
    ],

    "correctAnswer": 3,
    "level": "beginner"
  },
  {
    "id": 9,
    "question": "Which statement can be used as an alternative to multiple if-else statements?",
    "options": [
      "for statement",
      "while statement",
      "do-while statement",
      "switch statement"
    ],
    "correctAnswer": 3,
    "level": "beginner"
  },
  {
    "id": 10,
    "question": "Which loop is guaranteed to execute at least once?",
    "options": [
      "for loop",
      "while loop",
      "do-while loop",
      "for-each loop"
    ],
    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 11,
    "question": "What is the syntax to declare a one-dimensional array of integers in Java?",
    "options": [
      "int array[];",
      "int[] array;",
      "array int[];",
      "Both A and B"
    ],
    "correctAnswer": 3,
    "level": "intermediate"
  },
  {
    "id": 12,
    "question": "What is the enhanced for loop specifically designed for?",
    "options": [
      "Only for arrays",
      "Only for collections",
      "For iterating through arrays and collections",
      "For parallel processing"
    ],

    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 13,
    "question": "Which of the following classes is immutable in Java?",
    "options": [
      "StringBuilder",
      "StringBuffer",
      "String",
      "None of the above"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 14,
    "question": "Which class would be most efficient for concatenating strings in a single-threaded environment?",
    "options": [
      "String",
      "StringBuffer",
      "StringBuilder",
      "All are equally efficient"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 15,
    "question": "What is the primary purpose of the static keyword in Java?",
    "options": [
      "To create immutable variables",
      "To make variables and methods belong to the class rather than to instances",
      "To prevent inheritance",
      "To optimize memory usage"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 16,
    "question": "When a variable is declared as final, what does it mean?",
    "options": [
      "The variable must be initialized when declared",
      "The variable cannot be changed after initialization",
      "The variable will be deleted after program completion",
      "The variable can only be accessed within the class"

    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 17,
    "question": "What is the purpose of wrapper classes in Java?",
    "options": [
      "To provide encryption for primitive types",
      "To convert primitive types to objects and vice versa",
      "To enable primitive types to access static methods",
      "To make primitive types thread-safe"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 18,
    "question": "Which of the following is not a wrapper class in Java?",
    "options": [
      "Boolean",
      "Character",
      "String",
      "Integer"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 19,
    "question": "What is the result of casting a long to an int when the long value is too large for int?",
    "options": [
      "Compilation error",
      "Runtime exception",
      "Truncation of the most significant bits",
      "Automatic conversion to a suitable value"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 20,
    "question": "Which operation performs automatic widening type conversion?",
    "options": [
      "double to int",
      "float to long",
      "int to byte",
      "short to int"

    ],
    "correctAnswer": 3,
    "level": "intermediate"
  },
  {
    "id": 21,
    "question": "What happens when you call a method with arguments that don't match any method signature but can be promoted to match one?",
    "options": [
      "Compilation error",
      "Runtime exception",
      "Automatic type promotion occurs",
      "The method with most similar signature is called"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 22,
    "question": "How many parameters can a method accept at maximum in Java?",
    "options": [
      "8",
      "16",
      "255",
      "No fixed limit"
    ],
    "correctAnswer": 3,
    "level": "intermediate"
  },
  {
    "id": 23,
    "question": "Which component of Java is responsible for executing the bytecode?",
    "options": [
      "JDK",
      "JRE",
      "JVM",
      "Compiler"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 24,
    "question": "Which access modifier provides the most restrictive access?",
    "options": [
      "public",
      "protected",
      "default (no modifier)",

      "private"
    ],
    "correctAnswer": 3,
    "level": "intermediate"
  },
  {
    "id": 25,
    "question": "Which of the following is true about default access modifier in Java?",
    "options": [
      "Accessible only within the same class",
      "Accessible within the same package only",
      "Accessible from any class in any package",
      "Accessible within the same package and subclasses"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 26,
    "question": "Which of the following is NOT a feature of an enum in Java?",
    "options": [
      "Enums can implement interfaces",
      "Enums can have constructors",
      "Enums can extend classes",
      "Enums can have methods"
    ],
    "correctAnswer": 2,
    "level": "advanced"
  },
  {
    "id": 27,
    "question": "What is a functional interface in Java?",
    "options": [
      "An interface with exactly one abstract method",
      "An interface with at least one default method",
      "Any interface that supports lambda expressions",
      "An interface that extends java.util.Function"
    ],
    "correctAnswer": 0,
    "level": "advanced"
  },
  {
    "id": 28,
    "question": "Which of the following is NOT a built-in functional interface in Java?",
    "options": [
      "Predicate<T>",
      "Consumer<T>",
      "Mapper<T,R>",

      "Supplier<T>"
    ],
    "correctAnswer": 2,
    "level": "advanced"
  },
  {
    "id": 29,
    "question": "Which of the following is true about the 'finally' block in exception handling?",
    "options": [
      "It executes only if an exception occurs",
      "It executes only if no exception occurs",
      "It always executes whether an exception occurs or not",
      "It is optional in a try-catch structure"
    ],
    "correctAnswer": 2,
    "level": "advanced"
  },
  {
    "id": 30,
    "question": "Which exception is thrown when an array is accessed with an illegal index?",
    "options": [
      "NullPointerException",
      "ArrayIndexOutOfBoundsException",
      "IllegalArgumentException",
      "IndexOutOfRangeException"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 31,
    "question": "Which of the following is true about the try-with-resources statement?",
    "options": [
      "It's available since Java 5",
      "It eliminates the need for a finally block when closing resources",
      "It only works with File resources",
      "It requires Java 9 or higher"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 32,
    "question": "Which of the following states is NOT a thread state in Java?",
    "options": [
      "Running",
      "Waiting",
      "Dead",

      "Suspended"
    ],
    "correctAnswer": 3,
    "level": "advanced"
  },
  {
    "id": 33,
    "question": "What is the purpose of the 'synchronized' keyword in Java?",
    "options": [
      "To increase thread execution speed",
      "To prevent thread interference and memory inconsistency errors",
      "To terminate threads automatically",
      "To force threads to run in parallel"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 34,
    "question": "Which collection type maintains insertion order but is not synchronized?",
    "options": [
      "Vector",
      "ArrayList",
      "Hashtable",
      "TreeSet"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 35,
    "question": "Which of the following operations is NOT available in the Stream API?",
    "options": [
      "map()",
      "filter()",
      "sort()",
      "replace()"
    ],
    "correctAnswer": 3,
    "level": "advanced"
  }
]