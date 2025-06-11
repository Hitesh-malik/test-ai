import { QuizQuestion } from "./type";
export const springBootRestQuestions: QuizQuestion[] = [
  {
    "id": 1,
    "question": "Which annotation is used to create a RESTful controller in Spring Boot?",
    "options": [
      "@Controller",
      "@RestController",
      "@WebController",
      "@ApiController"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 2,
    "question": "What does the @RequestMapping annotation do in a Spring Boot REST API?",
    "options": [
      "Maps a database request to a Java object",
      "Maps HTTP requests to specific handler methods",
      "Creates a mapping between Java classes",
      "Defines the request parameters for API documentation"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 3,
    "question": "Which HTTP status code is typically returned for a successful resource creation in a RESTful API?",
    "options": [
      "200 OK",
      "201 Created",
      "204 No Content",
      "302 Found"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 4,
    "question": "How do you specify that a method parameter should be bound to a request parameter in Spring Boot?",
    "options": [
      "@QueryParam",
      "@RequestParam",
      "@PathParam",

      "@Param"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 5,
    "question": "Which annotation is used to map a method parameter to a path variable in the URL?",
    "options": [
      "@UrlVariable",
      "@PathVariable",
      "@RequestVariable",
      "@PathParam"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 6,
    "question": "Which of the following annotations can be used to specify HTTP methods in Spring Boot RESTcontrollers?",
    "options": [
      "@GetMapping, @PostMapping, @PutMapping, @DeleteMapping",
      "@Get, @Post, @Put, @Delete",
      "@HttpGet, @HttpPost, @HttpPut, @HttpDelete",
      "@RequestMethod.GET, @RequestMethod.POST, @RequestMethod.PUT, @RequestMethod.DELETE"
    ],
    "correctAnswer": 0,
    "level": "intermediate"
  },
  {
    "id": 7,
    "question": "What is the purpose of the @RequestBody annotation in Spring Boot REST controllers?",
    "options": [
      "To specify that a method returns a response body",
      "To indicate that a parameter should be bound to the web request body",
      "To validate the request body content",
      "To convert the response body to JSON"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 8,
    "question": "How can you handle exceptions globally in a Spring Boot REST API?",
    "options": [
      "By using try-catch blocks in each controller method",
      "By using @ExceptionHandler methods in each controller",

      "By creating a class with @ControllerAdvice and using @ExceptionHandler methods",
      "By implementing the ErrorHandler interface"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 9,
    "question": "Which dependency would you add to implement API documentation using Swagger/OpenAPI in a Spring Boot application?",
    "options": [
      "spring-boot-starter-swagger",
      "springdoc-openapi-ui",
      "spring-swagger-docs",
      "spring-boot-openapi"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 10,
    "question": "What is the purpose of the ResponseEntity class in Spring Boot?",
    "options": [
      "To create database entities that respond to queries",
      "To map JSON responses to Java objects",
      "To create a response with custom status code, headers, and body",
      "To handle response validation"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 11,
    "question": "How do you implement validation for request bodies in a Spring Boot REST API?",
    "options": [
      "By implementing the Validator interface in your controller",
      "By using custom if-else statements to validate each field",
      "By adding Bean Validation annotations and using @Valid annotation",
      "By creating a separate ValidationService"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 12,
    "question": "Which of the following is NOT a standard REST API endpoint naming convention?",
    "options": [
      "GET /users",

      "POST /users",
      "GET /getUser?id=1",
      "DELETE /users/{id}"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 13,
    "question": "How can you implement resource filtering (controlling which fields are included in responses) in Spring Boot?",
    "options": [
      "By using @JsonFilter and FilterProvider",
      "By creating multiple DTOs for different views",
      "By using @JsonView annotations",
      "All of the above"
    ],
    "correctAnswer": 3,
    "level": "intermediate"
  },
  {
    "id": 14,
    "question": "Which Spring Boot starter would you use to implement HATEOAS in your REST API?",
    "options": [
      "spring-boot-starter-links",
      "spring-boot-starter-hateoas",
      "spring-boot-starter-rest-links",
      "spring-boot-starter-hypermedia"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 15,
    "question": "How can you enable cross-origin requests (CORS) globally in a Spring Boot application?",
    "options": [
      "By adding @CrossOrigin to each controller method",
      "By creating a WebMvcConfigurer bean with configured CORS mappings",
      "By setting cors.enabled=true in application.properties",
      "CORS is enabled by default in Spring Boot"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 16,
    "question": "What is API versioning, and which of the following is NOT a common versioning strategy in Spring Boot REST APIs?",

    "options": [
      "URI versioning (e.g., /api/v1/users)",
      "Request parameter versioning (e.g., /api/users?version=1)",
      "Media type versioning (e.g., Accept: application/vnd.company.app-v1+json)",
      "Database versioning (e.g., using Liquibase or Flyway)"
    ],
    "correctAnswer": 3,
    "level": "advanced"
  },
  {
    "id": 17,
    "question": "How would you implement rate limiting in a Spring Boot REST API?",
    "options": [
      "Using the built-in @RateLimit annotation",
      "By implementing a custom HandlerInterceptor that tracks requests",
      "Using a library like bucket4j with Spring Security or a custom filter",
      "Rate limiting is built into Spring Boot starter web"
    ],
    "correctAnswer": 2,
    "level": "advanced"
  },
  {
    "id": 18,
    "question": "Which testing approach allows you to test only the web layer of a Spring Boot REST API without starting the full application context?",
    "options": [
      "@WebMvcTest",
      "@SpringBootTest",
      "@RestTest",
      "@ApiTest"
    ],
    "correctAnswer": 0,
    "level": "advanced"
  },
  {
    "id": 19,
    "question": "What is GraphQL, and how does it relate to REST APIs in Spring Boot?",
    "options": [
      "A graph-based database that works with REST",
      "A query language and runtime for APIs that can be an alternative to REST",
      "A visualization tool for REST API documentation",
      "A security protocol for REST APIs"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 20,
    "question": "Which of the following approaches can help improve the performance of a Spring Boot REST API?",
    "options": [
      "Using response compression",
      "Implementing proper caching strategies",
      "Using asynchronous request processing with CompletableFuture",
      "All of the above"
    ],
    "correctAnswer": 3,
    "level": "advanced"
  }
];