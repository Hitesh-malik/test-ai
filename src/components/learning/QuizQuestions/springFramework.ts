import { QuizQuestion } from "./type";
export const springFrameWorkQuestions: QuizQuestion[] = [
    {
        "id": 1,
        "question": "What is the Spring Framework primarily used for?",
        "options": [
            "Mobile application development",
            "Frontend development",
            "Enterprise Java application development",
            "Operating system development"
        ],
        "correctAnswer": 2,
        "level": "beginner"
    },
    {
        "id": 2,
        "question": "What is Inversion of Control (IoC) in Spring?",
        "options": [
            "A design pattern where objects define their own dependencies",
            "A principle where the control of object creation and lifecycle is transferred to the framework",
            "A way to invert the flow of method calls",
            "A technique to reverse the application logic"
        ],
        "correctAnswer": 1,
        "level": "beginner"
    },
    {
        "id": 3,
        "question": "Which of the following is the most common way to configure a Spring application?",
        "options": [
            "XML configuration",
            "Annotation-based configuration",
            "Java-based configuration",
            "All of the above are commonly used"
        ],
        "correctAnswer": 3,
        "level": "beginner"
    },
    {
        "id": 4,
        "question": "What does the @Autowired annotation do in Spring?",
        "options": [
            "Creates a new instance of a class",
            "Automatically injects dependencies",
            "Defines a Bean",
            "Marks a class as a controller"
        ],

        "correctAnswer": 1,
        "level": "beginner"
    },
    {
        "id": 5,
        "question": "What is a Spring Bean?",
        "options": [
            "A Java class annotated with @Bean",
            "An object that is instantiated, assembled, and managed by the Spring IoC container",
            "A component of the Spring MVC module",
            "A type of coffee that Spring developers prefer"
        ],
        "correctAnswer": 1,
        "level": "beginner"
    },
    {
        "id": 6,
        "question": "Which of the following annotations is used to define a Spring MVC controller?",
        "options": [
            "@Controller",
            "@Component",
            "@Repository",
            "@Service"
        ],
        "correctAnswer": 0,
        "level": "intermediate"
    },
    {
        "id": 7,
        "question": "What is the default scope of a Spring Bean?",
        "options": [
            "Prototype",
            "Request",
            "Session",
            "Singleton"
        ],
        "correctAnswer": 3,
        "level": "intermediate"
    },
    {
        "id": 8,
        "question": "Which Spring module is responsible for database access and integration?",
        "options": [
            "Spring Core",
            "Spring AOP",
            "Spring Data",
            "Spring MVC"
        ],

        "correctAnswer": 2,
        "level": "intermediate"
    },
    {
        "id": 9,
        "question": "What is Spring Boot mainly used for?",
        "options": [
            "Providing security to Spring applications",
            "Creating standalone, production-grade applications with minimal configuration",
            "Handling database transactions",
            "Defining the MVC architecture"
        ],
        "correctAnswer": 1,
        "level": "intermediate"
    },
    {
        "id": 10,
        "question": "In Spring, what is Aspect-Oriented Programming (AOP) used for?",
        "options": [
            "For handling database operations",
            "For creating user interfaces",
            "For separating cross-cutting concerns like logging and security",
            "For defining HTTP endpoints"
        ],
        "correctAnswer": 2,
        "level": "intermediate"
    },
    {
        "id": 11,
        "question": "What is the purpose of the @RequestMapping annotation in Spring MVC?",
        "options": [
            "To map HTTP requests to specific controller methods",
            "To define request parameters",
            "To create a response entity",
            "To inject dependencies"
        ],
        "correctAnswer": 0,
        "level": "intermediate"
    },
    {
        "id": 12,
        "question": "Which of the following is NOT a valid bean scope in Spring?",
        "options": [
            "singleton",
            "prototype",
            "thread",
            "request"
        ],

        "correctAnswer": 2,
        "level": "intermediate"
    },
    {
        "id": 13,
        "question": "What does the @Transactional annotation do in Spring?",
        "options": [
            "Marks a class as a DAO/Repository",
            "Automatically creates database tables",
            "Handles database transaction management",
            "Creates a connection pool"
        ],
        "correctAnswer": 2,
        "level": "intermediate"
    },
    {
        "id": 14,
        "question": "Which of the following is a key advantage of Spring Boot over traditional Spring?",
        "options": [
            "Support for database operations",
            "Auto-configuration and starter dependencies",
            "Support for web applications",
            "Dependency injection"
        ],
        "correctAnswer": 1,
        "level": "intermediate"
    },
    {
        "id": 15,
        "question": "What is the Spring ApplicationContext?",
        "options": [
            "A class that holds application properties",
            "An interface to represent the Spring IoC container",
            "A tool to generate Spring code",
            "A module for database access"
        ],
        "correctAnswer": 1,
        "level": "intermediate"
    },
    {
        "id": 16,
        "question": "Which annotation is used for defining a REST controller in Spring?",
        "options": [
            "@Controller",
            "@RestController",
            "@RequestMapping",
            "@Service"
        ],

        "correctAnswer": 1,
        "level": "advanced"
    },
    {
        "id": 17,
        "question": "What is Spring WebFlux used for?",
        "options": [
            "Creating traditional synchronous web applications",
            "Building reactive, non-blocking applications",
            "Sending emails from Spring applications",
            "Web security"
        ],
        "correctAnswer": 1,
        "level": "advanced"
    },
    {
        "id": 18,
        "question": "Which Spring module provides support for developing reactive applications?",
        "options": [
            "Spring Data",
            "Spring MVC",
            "Spring AOP",
            "Spring WebFlux"
        ],
        "correctAnswer": 3,
        "level": "advanced"
    },
    {
        "id": 19,
        "question": "What is the main purpose of Spring Cloud?",
        "options": [
            "To provide cloud storage integration",
            "To simplify development of distributed systems and microservices",
            "To offer database services in the cloud",
            "To deploy Spring applications to cloud providers"
        ],
        "correctAnswer": 1,
        "level": "advanced"
    },
    {
        "id": 20,
        "question": "Which design pattern is used by Spring's ApplicationContext?",
        "options": [
            "Factory Pattern",
            "Singleton Pattern",
            "Observer Pattern",
            "Builder Pattern"
        ],

        "correctAnswer": 0,
        "level": "advanced"
    }
]