import { QuizQuestion } from "./type";
export const devopsJavaQuestions: QuizQuestion[] = [
  {
    "id": 1,
    "question": "What is DevOps primarily focused on?",
    "options": [
      "Writing better Java code",
      "Reducing the gap between development and operations teams",
      "Deploying applications only on cloud platforms",
      "Managing databases more efficiently"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 2,
    "question": "Which of the following is a popular version control system used in DevOps practices?",
    "options": [
      "Maven",
      "Docker",
      "Git",
      "Jenkins"
    ],
    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 3,
    "question": "What is Continuous Integration (CI) in DevOps?",
    "options": [
      "Continuously deploying code to production",
      "Integrating various programming languages in one application",
      "Frequently merging code changes into a central repository followed by automated builds and tests",
      "Continuous monitoring of application performance"
    ],
    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 4,
    "question": "What is a Docker container?",
    "options": [
      "A physical server used for deployment",
      "A lightweight, standalone executable package that includes everything needed to run an application",
      "A Java Virtual Machine instance",
      "A type of database used in microservices"
    ],

    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 5,
    "question": "Which build tool is commonly used for Java projects in a DevOps pipeline?",
    "options": [
      "NPM",
      "Maven",
      "Webpack",
      "Make"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 6,
    "question": "What is the purpose of a Dockerfile in Java projects?",
    "options": [
      "To compile Java source code",
      "To define how to build a Docker image for a Java application",
      "To deploy Java applications to production",
      "To test Java applications automatically"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 7,
    "question": "Which CI/CD tool is widely used for automating Java application builds?",
    "options": [
      "Jenkins",
      "Docker",
      "Git",
      "Tomcat"
    ],
    "correctAnswer": 0,
    "level": "intermediate"
  },
  {
    "id": 8,
    "question": "What is the purpose of an artifact repository in Java DevOps workflows?",
    "options": [
      "To store source code",
      "To store and manage build artifacts like JAR/WAR files",
      "To deploy applications automatically",
      "To document APIs"
    ],

    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 9,
    "question": "What is Infrastructure as Code (IaC) in DevOps?",
    "options": [
      "Writing code that automatically scales infrastructure based on load",
      "Managing infrastructure using code and automation tools rather than manual processes",
      "Using programming languages to build infrastructure components",
      "Converting infrastructure components into Java code"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 10,
    "question": "Which of the following is NOT a common practice in Continuous Delivery for Java applications?",
    "options": [
      "Automated testing",
      "Version control",
      "Manual approval for production deployment",
      "Directly pushing code to production without testing"
    ],
    "correctAnswer": 3,
    "level": "intermediate"
  },
  {
    "id": 11,
    "question": "What is a key benefit of using Docker for Java applications?",
    "options": [
      "It eliminates the need for a JVM",
      "It ensures consistent environment across development, testing and production",
      "It automatically fixes bugs in Java code",
      "It makes Java applications run faster than native implementations"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 12,
    "question": "Which Maven plugin is commonly used to package a Spring Boot application into a Docker container?",
    "options": [
      "maven-docker-plugin",
      "dockerfile-maven-plugin",
      "spring-docker-maven-plugin",

      "container-maven-plugin"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 13,
    "question": "What is the main purpose of environment variables in a containerized Java application?",
    "options": [
      "To improve application performance",
      "To configure application behavior without modifying the container image",
      "To ensure backward compatibility with older Java versions",
      "To translate the application into different languages"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 14,
    "question": "Which statement about blue-green deployment is true?",
    "options": [
      "It's a deployment strategy with two identical environments where one is live and one is idle",
      "It refers to deploying environmentally friendly applications",
      "It's a way to deploy applications using AI",
      "It's a strategy for deploying only partially completed features"
    ],
    "correctAnswer": 0,
    "level": "intermediate"
  },
  {
    "id": 15,
    "question": "Which tool is used for monitoring JVM metrics in a DevOps environment?",
    "options": [
      "Docker",
      "Jenkins",
      "Prometheus with JMX exporter",
      "Maven"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 16,
    "question": "What is Kubernetes' role in Java microservices architecture?",
    "options": [
      "It replaces the need for Java frameworks like Spring",
      "It compiles Java code more efficiently than the standard compiler",
      "It orchestrates containerized applications, providing scaling, load balancing, and self-healing",

      "It converts Java applications into native executables"
    ],
    "correctAnswer": 2,
    "level": "advanced"
  },
  {
    "id": 17,
    "question": "What is a service mesh in microservices architecture?",
    "options": [
      "A network of Java services communicating via RMI",
      "A dedicated infrastructure layer for handling service-to-service communication",
      "A mesh network of physical servers running Java applications",
      "A way to write mesh-based algorithms in Java"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 18,
    "question": "Which approach best represents GitOps for Java application deployment?",
    "options": [
      "Using Git webhooks to trigger Jenkins builds",
      "Using Git as a single source of truth for declarative infrastructure and applications",
      "Storing application logs in Git repositories",
      "Running Git commands from within Java applications"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 19,
    "question": "What is chaos engineering in a DevOps context?",
    "options": [
      "Writing code without proper planning",
      "The practice of deliberately introducing failures to test system resilience",
      "Allowing developers to deploy directly to production",
      "Having no standardized deployment process"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 20,
    "question": "Which approach is most suitable for implementing continuous performance testing for Java applications?",
    "options": [
      "Manual testing of application performance before each release",
      "Using JMeter or Gatling in CI/CD pipelines with defined performance thresholds",

      "Relying on user feedback about performance issues",
      "Running performance tests only in production"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  }
]