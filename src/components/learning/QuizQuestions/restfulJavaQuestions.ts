import { QuizQuestion } from "./type";
export const restfulJavaQuestions: QuizQuestion[] = [
  // Beginner questions (first 5)
  {
    id: 1,
    question: "What does REST stand for?",
    options: [
      "Reactive State Transfer",
      "Remote Service Technique",
      "Representational State Transfer",
      "Regular Expression State Transform"
    ],
    correctAnswer: 2,
    level: 'beginner'
  },
  {
    id: 2,
    question: "Which Java specification is primarily used for creating RESTful web services?",
    options: [
      "Servlet API",
      "JAX-RS (Java API for RESTful Web Services)",
      "JDBC (Java Database Connectivity)",
      "JPA (Java Persistence API)"
    ],
    correctAnswer: 1,
    level: 'beginner'
  },
  {
    id: 3,
    question: "Which HTTP method is typically used for updating an existing resource?",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    correctAnswer: 2,
    level: 'beginner'
  },
  {
    id: 4,
    question: "What is the primary data format used in modern RESTful services?",
    options: [
      "XML",
      "HTML",
      "YAML",
      "JSON"
    ],
    correctAnswer: 3,
    level: 'beginner'
  },
  {
    id: 5,
    question: "Which of the following is a key principle of RESTful services?",
    options: [
      "Stateful communication",
      "SOAP-based messaging",
      "Client-server architecture",
      "Tight coupling between client and server"
    ],
    correctAnswer: 2,
    level: 'beginner'
  },

  // Intermediate questions (next 10)
  {
    id: 6,
    question: "Which JAX-RS annotation is used to map a class to a specific URL path?",
    options: [
      "@URL",
      "@Path",
      "@Route",
      "@Mapping"
    ],
    correctAnswer: 1,
    level: 'intermediate'
  },
  {
    id: 7,
    question: "Which JAX-RS annotation is used to handle HTTP POST requests?",
    options: [
      "@POST",
      "@HttpPost",
      "@PostMapping",
      "@RequestPost"
    ],
    correctAnswer: 0,
    level: 'intermediate'
  },
  {
    id: 8,
    question: "What is the purpose of the @PathParam annotation in JAX-RS?",
    options: [
      "To include a parameter in the HTTP request body",
      "To specify HTTP headers",
      "To extract values from URL path segments",
      "To define query parameters"
    ],
    correctAnswer: 2,
    level: 'intermediate'
  },
  {
    id: 9,
    question: "Which Java library is a popular implementation of JAX-RS?",
    options: [
      "Spring Web",
      "Hibernate",
      "Jersey",
      "Tomcat"
    ],
    correctAnswer: 2,
    level: 'intermediate'
  },
  {
    id: 10,
    question: "What does a HTTP 404 status code indicate in a RESTful service?",
    options: [
      "Bad request",
      "Resource not found",
      "Internal server error",
      "Unauthorized access"
    ],
    correctAnswer: 1,
    level: 'intermediate'
  },
  {
    id: 11,
    question: "Which annotation is used to specify that a method parameter should be bound to the body of the HTTP request in JAX-RS?",
    options: [
      "@Body",
      "@RequestBody",
      "@Content",
      "@Consumes"
    ],
    correctAnswer: 1,
    level: 'intermediate'
  },
  {
    id: 12,
    question: "What is the purpose of @QueryParam annotation in JAX-RS?",
    options: [
      "To extract values from URL path variables",
      "To extract values from the request body",
      "To extract values from query parameters in the URL",
      "To define the response query format"
    ],
    correctAnswer: 2,
    level: 'intermediate'
  },
  {
    id: 13,
    question: "Which HTTP method is idempotent?",
    options: [
      "POST",
      "GET",
      "PATCH",
      "None of the above"
    ],
    correctAnswer: 1,
    level: 'intermediate'
  },
  {
    id: 14,
    question: "Which annotation specifies the MIME media types a resource can produce?",
    options: [
      "@MediaType",
      "@Produces",
      "@ResponseType",
      "@Format"
    ],
    correctAnswer: 1,
    level: 'intermediate'
  },
  {
    id: 15,
    question: "Which of the following is true about statelessness in REST?",
    options: [
      "The server stores session information",
      "Each request from client to server must contain all information needed to understand the request",
      "The client must store all application state",
      "State is maintained between requests through cookies"
    ],
    correctAnswer: 1,
    level: 'intermediate'
  },

  // Advanced questions (last 5)
  {
    id: 16,
    question: "What is the Richardson Maturity Model in RESTful services?",
    options: [
      "A security framework for REST APIs",
      "A way to measure the performance of REST APIs",
      "A model that breaks down the principal elements of a REST approach into three steps",
      "A database model for storing REST requests"
    ],
    correctAnswer: 2,
    level: 'advanced'
  },
  {
    id: 17,
    question: "Which of the following is NOT a constraint of the REST architectural style?",
    options: [
      "Client-server architecture",
      "Stateless communication",
      "SOAP-based messaging",
      "Layered system"
    ],
    correctAnswer: 2,
    level: 'advanced'
  },
  {
    id: 18,
    question: "What is the main purpose of implementing HATEOAS in a RESTful API?",
    options: [
      "To improve security",
      "To allow clients to navigate the API dynamically through hypermedia links",
      "To increase data transfer speeds",
      "To reduce server load"
    ],
    correctAnswer: 1,
    level: 'advanced'
  },
  {
    id: 19,
    question: "What Java library can be used to implement HATEOAS in your RESTful services?",
    options: [
      "Spring HATEOAS",
      "JAX-HATEOAS",
      "Jersey HATEOAS",
      "Java Hypermedia"
    ],
    correctAnswer: 0,
    level: 'advanced'
  },
  {
    id: 20,
    question: "Which authentication mechanism is most commonly used in modern RESTful services?",
    options: [
      "Basic Authentication",
      "Form-based Authentication",
      "OAuth 2.0 with JWT",
      "Digest Authentication"
    ],
    correctAnswer: 2,
    level: 'advanced'
  }
];