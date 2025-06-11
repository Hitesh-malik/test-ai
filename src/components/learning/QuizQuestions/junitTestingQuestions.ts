import { QuizQuestion } from "./type";
export const junitTestingQuestions: QuizQuestion[] = [
  {
    "id": 1,
    "question": "What is JUnit primarily used for?",
    "options": [
      "Performance testing",
      "Unit testing",
      "Load testing",
      "Security testing"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 2,
    "question": "Which annotation is used to mark a method as a test in JUnit 5?",
    "options": [
      "@TestMethod",
      "@Test",
      "@JUnitTest",
      "@TestCase"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 3,
    "question": "Which of the following is a correct assertion in JUnit?",
    "options": [
      "assertEquals(expected, actual)",
      "confirmEquals(expected, actual)",
      "checkEquals(expected, actual)",
      "assertionEquals(expected, actual)"
    ],
    "correctAnswer": 0,
    "level": "beginner"
  },
  {
    "id": 4,
    "question": "What is the purpose of the @BeforeEach annotation in JUnit 5?",
    "options": [
      "To run a method before the entire test class is executed",
      "To run a method before each test method is executed",
      "To mark a test as a prerequisite for other tests",
      "To initialize the test runner"
    ],

    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 5,
    "question": "Which assertion would you use to verify that an object is null?",
    "options": [
      "assertEquals(null, object)",
      "assertNull(object)",
      "assertTrue(object == null)",
      "Any of the above"
    ],
    "correctAnswer": 3,
    "level": "beginner"
  },
  {
    "id": 6,
    "question": "What is the purpose of the @AfterEach annotation in JUnit 5?",
    "options": [
      "To run a method after the entire test class is executed",
      "To run a method after each test method is executed",
      "To mark a test as the last one to execute",
      "To clean up the test runner"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 7,
    "question": "What is a test fixture in JUnit?",
    "options": [
      "A special hardware device for testing",
      "The environment or state needed for running tests",
      "A type of assertion specific to JUnit",
      "A plugin for running performance tests"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 8,
    "question": "What does the @ParameterizedTest annotation allow you to do in JUnit 5?",
    "options": [
      "Test the performance of parameterized methods",
      "Run the same test multiple times with different parameters",
      "Create tests that automatically find their parameters",
      "Test methods with optional parameters"
    ],

    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 9,
    "question": "What is Mockito used for in conjunction with JUnit?",
    "options": [
      "To create mock objects for dependencies in unit tests",
      "To measure code coverage",
      "To generate test reports",
      "To create test data in databases"
    ],
    "correctAnswer": 0,
    "level": "intermediate"
  },
  {
    "id": 10,
    "question": "How do you test that a method throws an expected exception in JUnit 5?",
    "options": [
      "Use @ExpectedException annotation",
      "Use try-catch blocks in the test method",
      "Use assertThrows()",
      "Use @HandleException annotation"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 11,
    "question": "What is the purpose of the @Disabled annotation in JUnit 5?",
    "options": [
      "To skip a test method or class",
      "To mark a test as incomplete",
      "To disable assertions in a test",
      "To prevent parallel execution of tests"
    ],
    "correctAnswer": 0,
    "level": "intermediate"
  },
  {
    "id": 12,
    "question": "Which of the following is NOT a benefit of unit testing?",
    "options": [
      "Finding bugs early in the development cycle",
      "Serving as living documentation of the codebase",
      "Eliminating the need for integration testing",
      "Facilitating safe refactoring"
    ],

    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 13,
    "question": "What does the term 'test coverage' refer to?",
    "options": [
      "The number of bugs found by tests",
      "The percentage of code executed during testing",
      "The types of tests in a test suite",
      "The time taken to run all tests"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 14,
    "question": "What is the purpose of assumptions in JUnit 5?",
    "options": [
      "To document the developer's assumptions about the code",
      "To skip tests when preconditions are not met",
      "To create mocks of external dependencies",
      "To verify that methods are called with expected parameters"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 15,
    "question": "What is the main difference between a unit test and an integration test?",
    "options": [
      "Unit tests are automated, integration tests are manual",
      "Unit tests are faster to run than integration tests",
      "Unit tests focus on isolated components, integration tests verify interactions between components",
      "Unit tests are written by developers, integration tests by QA engineers"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 16,
    "question": "What is Test-Driven Development (TDD)?",
    "options": [
      "A testing approach where tests are written after the implementation",
      "A development methodology where you write tests before implementing the code",
      "A testing framework for performance testing",
      "A tool for generating test data"
    ],

    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 17,
    "question": "What is a test double?",
    "options": [
      "A technique for running the same test twice",
      "A duplicate test that verifies the same functionality in different ways",
      "A generic term for test-specific replacements like mocks, stubs, and fakes",
      "A secondary assertion in a test method"
    ],
    "correctAnswer": 2,
    "level": "advanced"
  },
  {
    "id": 18,
    "question": "What is the Spring Boot @WebMvcTest annotation used for?",
    "options": [
      "Testing the entire Spring application context",
      "Testing Spring MVC controllers without starting the full application context",
      "Performance testing web applications",
      "Generating mock HTTP requests"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 19,
    "question": "What is a test pyramid?",
    "options": [
      "A visual representation of test dependencies",
      "A concept suggesting you should have more unit tests than integration tests, and more integration tests than end-to-end tests",
      "A tool for organizing test suites",
      "A technique for structuring test classes"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 20,
    "question": "What is mutation testing?",
    "options": [
      "Testing genetic algorithms",
      "Testing against randomly changing data inputs",
      "A technique to evaluate test quality by making small changes to the program and checking if tests fail",
      "A type of performance testing for evolving codebases"

    ],
    "correctAnswer": 2,
    "level": "advanced"
  }
]