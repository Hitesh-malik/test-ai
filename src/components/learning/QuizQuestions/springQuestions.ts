import { QuizQuestion } from "./type";
export const springQuestions: QuizQuestion[] = [
    // Beginner questions (first 5)
    {
        id: 1,
        question: "What is Spring Framework?",
        options: [
            "A programming language",
            "A database system",
            "A Java application framework",
            "A web browser"
        ],
        correctAnswer: 2,
        level: 'beginner'
    },
    {
        id: 2,
        question: "What is the core principle of Spring Framework?",
        options: [
            "Object-Oriented Programming",
            "Dependency Injection",
            "Functional Programming",
            "Test-Driven Development"
        ],
        correctAnswer: 1,
        level: 'beginner'
    },
    {
        id: 3,
        question: "What is a Spring Bean?",
        options: [
            "A Java class managed by Spring IoC container",
            "A coffee bean used by developers",
            "A UI component in Spring applications",
            "A database table structure"
        ],
        correctAnswer: 0,
        level: 'beginner'
    },
    {
        id: 4,
        question: "Which of the following is NOT a Spring Framework module?",
        options: [
            "Spring Core",
            "Spring MVC",
            "Spring Boot",
            "Spring Query"
        ],
        correctAnswer: 3,
        level: 'beginner'
    },
    {
        id: 5,
        question: "What does IoC stand for in Spring?",
        options: [
            "Internal Object Container",
            "Interface Object Class",
            "Inversion of Control",
            "Implementation of Components"
        ],
        correctAnswer: 2,
        level: 'beginner'
    },

    // Intermediate questions (next 10)
    {
        id: 6,
        question: "Which annotation is used to mark a class as a Spring component?",
        options: [
            "@SpringClass",
            "@Component",
            "@Bean",
            "@Repository"
        ],
        correctAnswer: 1,
        level: 'intermediate'
    },
    {
        id: 7,
        question: "What is the purpose of @Autowired annotation?",
        options: [
            "To define a constant value",
            "To automatically inject dependencies",
            "To create a new object",
            "To mark a method as deprecated"
        ],
        correctAnswer: 1,
        level: 'intermediate'
    },
    {
        id: 8,
        question: "Which Spring annotation is used to handle HTTP GET requests?",
        options: [
            "@GetRequest",
            "@RequestMapping",
            "@GetMapping",
            "@HttpGet"
        ],
        correctAnswer: 2,
        level: 'intermediate'
    },
    {
        id: 9,
        question: "What is Spring AOP?",
        options: [
            "A programming language for Spring",
            "Aspect Oriented Programming implementation",
            "Application Object Persistence",
            "Advanced Object Protocol"
        ],
        correctAnswer: 1,
        level: 'intermediate'
    },
    {
        id: 10,
        question: "Which file is commonly used for Spring configuration?",
        options: [
            "web.xml",
            "application.properties",
            "spring.config",
            "pom.xml"
        ],
        correctAnswer: 1,
        level: 'intermediate'
    },
    {
        id: 11,
        question: "What is the default scope of a Spring Bean?",
        options: [
            "prototype",
            "request",
            "singleton",
            "session"
        ],
        correctAnswer: 2,
        level: 'intermediate'
    },
    {
        id: 12,
        question: "Which of the following is NOT a valid Spring Bean scope?",
        options: [
            "singleton",
            "prototype",
            "global",
            "request"
        ],
        correctAnswer: 2,
        level: 'intermediate'
    },
    {
        id: 13,
        question: "What is Spring Boot?",
        options: [
            "A separate framework with no relation to Spring",
            "A module that helps bootstrap Spring applications",
            "A testing framework for Spring",
            "An IDE for Spring development"
        ],
        correctAnswer: 1,
        level: 'intermediate'
    },
    {
        id: 14,
        question: "Which annotation is used to mark a class as a REST controller?",
        options: [
            "@Controller",
            "@RestController",
            "@APIController",
            "@WebController"
        ],
        correctAnswer: 1,
        level: 'intermediate'
    },
    {
        id: 15,
        question: "What does the @RequestBody annotation do?",
        options: [
            "Creates a response body",
            "Maps HTTP request body to a method parameter",
            "Validates request parameters",
            "Redirects to a different URL"
        ],
        correctAnswer: 1,
        level: 'intermediate'
    },

    // Advanced questions (last 5)
    {
        id: 16,
        question: "What is the Spring ApplicationContext?",
        options: [
            "A simple configuration file",
            "An advanced implementation of BeanFactory",
            "A class for application logging",
            "A Spring Boot component"
        ],
        correctAnswer: 1,
        level: 'advanced'
    },
    {
        id: 17,
        question: "Which design pattern does Spring Dependency Injection follow?",
        options: [
            "Factory Pattern",
            "Singleton Pattern",
            "Decorator Pattern",
            "Inversion of Control Pattern"
        ],
        correctAnswer: 3,
        level: 'advanced'
    },
    {
        id: 18,
        question: "What is the purpose of @Transactional annotation?",
        options: [
            "To log transaction information",
            "To define transaction isolation level only",
            "To provide declarative transaction management",
            "To connect to multiple databases"
        ],
        correctAnswer: 2,
        level: 'advanced'
    },
    {
        id: 19,
        question: "What are Spring profiles used for?",
        options: [
            "Storing user profiles",
            "Managing application performance",
            "Configuring environment-specific beans and properties",
            "Profiling application memory usage"
        ],
        correctAnswer: 2,
        level: 'advanced'
    },
    {
        id: 20,
        question: "Which of the following is NOT a type of advice in Spring AOP?",
        options: [
            "Before advice",
            "After advice",
            "Around advice",
            "During advice"
        ],
        correctAnswer: 3,
        level: 'advanced'
    }
];