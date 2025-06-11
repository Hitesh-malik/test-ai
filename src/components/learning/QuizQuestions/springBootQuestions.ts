import { QuizQuestion } from "./type";
export const springBootJavaQuestions: QuizQuestion[] = [
  {
    "id": 1,
    "question": "What is Spring Boot primarily designed for?",
    "options": [
      "To replace the core Spring Framework",
      "To simplify the initial setup and development of Spring applications",
      "To provide only database connectivity features",
      "To work exclusively with non-Java programming languages"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 2,
    "question": "What is the main advantage of using Spring Boot starters?",
    "options": [
      "They provide production-ready security features",
      "They automatically deploy applications to the cloud",
      "They group related dependencies together and simplify build configuration",
      "They improve application performance by optimizing code"
    ],
    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 3,
    "question": "Which annotation is commonly used to mark the main class of a Spring Boot application?",
    "options": [
      "@SpringApplication",
      "@MainApplication",
      "@SpringBootApplication",
      "@BootApplication"
    ],
    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 4,
    "question": "What is the default embedded server in Spring Boot?",
    "options": [
      "Jetty",
      "Tomcat",
      "Undertow",
      "WebSphere"
    ],
    "correctAnswer": 1,

    "level": "beginner"
  },
  {
    "id": 5,
    "question": "Which file is commonly used for application configuration in Spring Boot?",
    "options": [
      "application.xml",
      "application.properties",
      "config.yaml",
      "settings.json"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 6,
    "question": "What does the Spring Boot Actuator provide?",
    "options": [
      "Database migration tools",
      "Production-ready features to help monitor and manage applications",
      "User interface components",
      "Code generation utilities"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 7,
    "question": "How can you specify different configuration properties for different environments in Spring Boot?",
    "options": [
      "By creating multiple application.properties files",
      "By using environment-specific properties files (e.g., application-dev.properties)",
      "By using XML configuration instead of properties files",
      "By creating separate Spring Boot projects for each environment"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 8,
    "question": "What is Spring Boot DevTools used for?",
    "options": [
      "Automatically deploying applications to production",
      "Providing development-time features like automatic restarts and live reload",
      "Generating database schema migrations",
      "Scanning code for security vulnerabilities"
    ],

    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 9,
    "question": "Which Spring Boot feature allows you to run SQL scripts automatically during application startup?",
    "options": [
      "JPA EntityManager",
      "Spring JDBC",
      "Data initialization with schema.sql and data.sql",
      "Hibernate ORM"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 10,
    "question": "How can you change the default port of a Spring Boot web application?",
    "options": [
      "By modifying the Tomcat configuration file directly",
      "By setting server.port property in application.properties",
      "By using @ServerPort annotation",
      "It cannot be changed as it's hardcoded"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 11,
    "question": "What is the purpose of the @ConfigurationProperties annotation in Spring Boot?",
    "options": [
      "To mark a class as a configuration source",
      "To bind external properties to a Java class",
      "To configure database properties",
      "To enable property encryption"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 12,
    "question": "Which of the following is NOT a valid Spring Boot property file format?",
    "options": [
      ".properties files",
      ".yml files",
      ".yaml files",
      ".xml files"

    ],
    "correctAnswer": 3,
    "level": "intermediate"
  },
  {
    "id": 13,
    "question": "What happens when a Spring Boot application has both application.properties and application.yml files?",
    "options": [
      "The application fails to start due to configuration conflict",
      "Only application.properties is used",
      "Only application.yml is used",
      "Both are loaded with properties from application.properties taking precedence"
    ],
    "correctAnswer": 3,
    "level": "intermediate"
  },
  {
    "id": 14,
    "question": "What interface would you implement to run code at application startup in Spring Boot?",
    "options": [
      "ApplicationRunner",
      "InitializingBean",
      "StartupHandler",
      "BootInitializer"
    ],
    "correctAnswer": 0,
    "level": "intermediate"
  },
  {
    "id": 15,
    "question": "Which Spring Boot Actuator endpoint provides information about application health?",
    "options": [
      "/status",
      "/health",
      "/info",
      "/metrics"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 16,
    "question": "What is Spring Boot's auto-configuration feature?",
    "options": [
      "A tool that automatically writes Java code for you",
      "A mechanism that automatically configures beans based on classpath and property settings",
      "A feature that automatically creates database tables",

      "A way to automatically deploy applications to servers"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 17,
    "question": "How would you create a custom auto-configuration in Spring Boot?",
    "options": [
      "By using the @AutoConfiguration annotation",
      "By implementing the AutoConfigurer interface",
      "By creating a configuration class and registering it in spring.factories",
      "Auto-configuration can only be created by the Spring Boot team"
    ],
    "correctAnswer": 2,
    "level": "advanced"
  },
  {
    "id": 18,
    "question": "What is a Spring Boot Profile?",
    "options": [
      "A performance monitoring tool for Spring applications",
      "A way to define environment-specific configuration and components",
      "A user account in Spring Security",
      "A template for creating new Spring Boot projects"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 19,
    "question": "How can you implement rate limiting in a Spring Boot application?",
    "options": [
      "Using the built-in @RateLimit annotation",
      "By configuring rate.limit properties in application.properties",
      "Using a third-party library like bucket4j or resilience4j",
      "Spring Boot does not support rate limiting"
    ],
    "correctAnswer": 2,
    "level": "advanced"
  },
  {
    "id": 20,
    "question": "What is Spring Boot Actuator's 'production-ready' feature that helps with distributed tracing?",
    "options": [
      "Spring Tracer",
      "Spring Distributor",
      "Spring Cloud Sleuth",

      "Spring Monitor"
    ],
    "correctAnswer": 2,
    "level": "advanced"
  }
];