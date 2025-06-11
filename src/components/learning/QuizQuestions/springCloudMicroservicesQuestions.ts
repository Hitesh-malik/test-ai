import { QuizQuestion } from "./type";
export const springCloudMicroservicesQuestions: QuizQuestion[] = [
  {
    "id": 1,
    "question": "What is the primary purpose of Spring Cloud in microservices architecture?",
    "options": [
      "To replace Spring Boot in microservices applications",
      "To provide tools for common patterns in distributed systems like service discovery and configurationmanagement",
      "To store microservices in the cloud",
      "To manage database connections in distributed systems"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 2,
    "question": "Which Spring Cloud component is used for service registration and discovery?",
    "options": [
      "Spring Cloud Config",
      "Spring Cloud Gateway",
      "Spring Cloud Netflix Eureka",
      "Spring Cloud OpenFeign"
    ],
    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 3,
    "question": "What is the purpose of Spring Cloud Config?",
    "options": [
      "To configure the number of microservices in an application",
      "To serve as a central place to manage external properties for applications across all environments",
      "To configure network settings for microservices",
      "To configure the cloud provider for deployment"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 4,
    "question": "Which Spring Cloud component serves as an API Gateway?",
    "options": [
      "Spring Cloud Netflix Zuul (older) or Spring Cloud Gateway (newer)",
      "Spring Cloud Eureka",
      "Spring Cloud Config",
      "Spring Cloud OpenFeign"

    ],
    "correctAnswer": 0,
    "level": "beginner"
  },
  {
    "id": 5,
    "question": "What is the main benefit of using a Service Registry like Eureka in microservices?",
    "options": [
      "It improves service performance",
      "It allows services to find and communicate with each other without hardcoding hostnames and ports",
      "It provides security features for services",
      "It automatically scales services based on load"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 6,
    "question": "Which Spring Cloud component is used for implementing circuit breaker patterns?",
    "options": [
      "Spring Cloud Circuit",
      "Spring Cloud Netflix Hystrix (older) or Resilience4j (newer)",
      "Spring Cloud Breaker",
      "Spring Cloud Fuse"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 7,
    "question": "What is the purpose of a Circuit Breaker in microservices?",
    "options": [
      "To break network connections when services are overloaded",
      "To prevent cascading failures by failing fast when a service is unresponsive",
      "To encrypt communications between services",
      "To disconnect databases when they become corrupted"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 8,
    "question": "Which Spring Cloud component is used for declarative REST client creation?",
    "options": [
      "Spring Cloud OpenFeign",
      "Spring Cloud RestTemplate",
      "Spring Cloud Client",
      "Spring Cloud HttpClient"

    ],
    "correctAnswer": 0,
    "level": "intermediate"
  },
  {
    "id": 9,
    "question": "What is Spring Cloud Sleuth used for?",
    "options": [
      "Service security",
      "Distributed tracing for debugging microservices",
      "Load balancing",
      "Caching microservice responses"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 10,
    "question": "How does Spring Cloud Config Server typically store configuration information?",
    "options": [
      "In memory only",
      "In a dedicated SQL database",
      "In a NoSQL database like MongoDB",
      "In a Git repository (by default) or other version control systems"
    ],
    "correctAnswer": 3,
    "level": "intermediate"
  },
  {
    "id": 11,
    "question": "What problem does Spring Cloud Stream solve in microservices?",
    "options": [
      "Database access and object-relational mapping",
      "Unified programming model for message brokers like RabbitMQ and Kafka",
      "Network latency between services",
      "UI rendering performance"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 12,
    "question": "What is the purpose of Spring Cloud Gateway?",
    "options": [
      "To route client requests to appropriate services and provide cross-cutting concerns like security",
      "To create gateways between different cloud providers",
      "To convert REST APIs to GraphQL",
      "To provide a gateway between legacy monoliths and new microservices"

    ],
    "correctAnswer": 0,
    "level": "intermediate"
  },
  {
    "id": 13,
    "question": "Which pattern does Spring Cloud Load Balancer implement?",
    "options": [
      "Server-side load balancing",
      "Client-side load balancing",
      "Content-based routing",
      "Round-robin scheduling"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 14,
    "question": "What is the function of Spring Cloud Bus?",
    "options": [
      "To handle service-to-service RPC communication",
      "To provide a message bus for propagating configuration changes across multiple instances",
      "To manage the physical network connections between services",
      "To handle database transactions across services"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 15,
    "question": "Which Spring Cloud component helps to secure microservices?",
    "options": [
      "Spring Cloud Guardian",
      "Spring Cloud Security",
      "Spring Cloud Protect",
      "Spring Cloud Auth"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 16,
    "question": "What is a Saga Pattern in microservices?",
    "options": [
      "A design pattern for UI components across microservices",
      "A sequence of local transactions where each transaction updates data within a single service",
      "A pattern for versioning microservices",
      "A pattern for organizing code within a single microservice"

    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 17,
    "question": "What is Spring Cloud Contract used for?",
    "options": [
      "Creating legal contracts for SaaS offerings",
      "Generating automatic documentation for RESTful APIs",
      "Consumer-driven contract testing between services",
      "Managing service level agreements between teams"
    ],
    "correctAnswer": 2,
    "level": "advanced"
  },
  {
    "id": 18,
    "question": "What pattern does the Resilience4j Bulkhead implementation provide?",
    "options": [
      "A pattern for data partitioning",
      "A pattern for isolating failures by limiting concurrent calls to a service",
      "A pattern for batching requests to improve performance",
      "A pattern for routing traffic between different service versions"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 19,
    "question": "What is the Command Query Responsibility Segregation (CQRS) pattern in microservices?",
    "options": [
      "A pattern where read and write operations use different models",
      "A pattern for separating business logic from data access",
      "A pattern for handling commands from multiple clients",
      "A pattern for dividing services based on query complexity"
    ],
    "correctAnswer": 0,
    "level": "advanced"
  },
  {
    "id": 20,
    "question": "What are the challenges of distributed tracing in microservices that Spring Cloud Sleuth helps address?",
    "options": [
      "Tracing network latency only",
      "Finding performance bottlenecks in a single service",
      "Tracking requests as they propagate through multiple services by adding correlation IDs",

      "Monitoring CPU and memory usage"
    ],
    "correctAnswer": 2,
    "level": "advanced"
  }
]