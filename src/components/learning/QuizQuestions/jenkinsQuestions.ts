import { QuizQuestion } from "./type";
export const jenkinsQuestions: QuizQuestion[] = [
  {
    "id": 1,
    "question": "What is Jenkins primarily used for?",
    "options": [
      "Monitoring server uptime",
      "Managing source code repositories",
      "Continuous integration and delivery automation",
      "Database backup and recovery"
    ],
    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 2,
    "question": "Which language is Jenkins written in?",
    "options": [
      "Python",
      "Java",
      "Ruby",
      "Go"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 3,
    "question": "What is the default port Jenkins runs on?",
    "options": [
      "8080",
      "9090",
      "443",
      "3000"
    ],
    "correctAnswer": 0,
    "level": "beginner"
  },
  {
    "id": 4,
    "question": "What is a Jenkins job?",
    "options": [
      "A Jenkins plugin",
      "A scheduled Jenkins restart",
      "A task that Jenkins performs such as building or testing code",
      "A Jenkins user account"
    ],

    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 5,
    "question": "What is Jenkinsfile used for?",
    "options": [
      "Managing plugin settings",
      "Storing pipeline definitions as code",
      "Running test cases",
      "Logging Jenkins activity"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 6,
    "question": "Which type of Jenkins job allows defining CI/CD pipelines in code?",
    "options": [
      "Freestyle Project",
      "Pipeline Project",
      "Multi-configuration Project",
      "External Monitor Job"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 7,
    "question": "Which plugin is required for working with Git in Jenkins?",
    "options": [
      "SCM Manager",
      "GitHub Webhook Plugin",
      "Git Plugin",
      "SCM Poller Plugin"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 8,
    "question": "What does the 'post' section in a Jenkins pipeline do?",
    "options": [
      "Defines environment variables",
      "Runs actions after the pipeline stages complete",
      "Specifies which agent to use",
      "Manages shared libraries"
    ],

    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 9,
    "question": "What is the purpose of the Jenkins 'agent' directive?",
    "options": [
      "To declare environment variables",
      "To specify where the pipeline or stage runs",
      "To configure notifications",
      "To declare credentials"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 10,
    "question": "What does a 'stage' block in Jenkins pipeline represent?",
    "options": [
      "A single step in a test suite",
      "A user login section",
      "A major phase in the CI/CD pipeline",
      "An individual plugin configuration"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 11,
    "question": "Which trigger in Jenkins checks for changes in SCM like Git?",
    "options": [
      "Build periodically",
      "Poll SCM",
      "Webhook",
      "Scheduled job"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 12,
    "question": "What is 'Blue Ocean' in Jenkins?",
    "options": [
      "A CI/CD plugin for Python",
      "A user-friendly visual interface for pipelines",
      "A Jenkins backup tool",
      "A Docker orchestration plugin"
    ],

    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 13,
    "question": "How can Jenkins securely store credentials?",
    "options": [
      "As plain text in Jenkinsfile",
      "Using environment variables",
      "Through the Jenkins Credentials plugin",
      "By hardcoding into job configuration"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 14,
    "question": "Which plugin is used in Jenkins for Docker integration?",
    "options": [
      "Docker Compose Plugin",
      "Jenkins Docker Plugin",
      "Docker Pipeline Plugin",
      "Docker Executor Plugin"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 15,
    "question": "What is a 'Declarative Pipeline' in Jenkins?",
    "options": [
      "Pipeline written using procedural syntax",
      "Pipeline written using a simple and structured syntax",
      "Pipeline with manual triggers",
      "Pipeline using external bash scripts"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 16,
    "question": "Which feature allows Jenkins to distribute builds across multiple machines?",
    "options": [
      "Shared Library",
      "Remote Triggering",
      "Master-Agent Architecture",
      "Multibranch Pipeline"
    ],

    "correctAnswer": 2,
    "level": "advanced"
  },
  {
    "id": 17,
    "question": "How can Jenkins support continuous delivery (CD)?",
    "options": [
      "By only compiling code",
      "By monitoring the application uptime",
      "By automating deployment to staging/production",
      "By sending daily emails"
    ],
    "correctAnswer": 2,
    "level": "advanced"
  },
  {
    "id": 18,
    "question": "What is a shared library in Jenkins pipelines?",
    "options": [
      "An external plugin",
      "A reusable piece of pipeline code stored in a Git repo",
      "A Java package in Jenkins core",
      "A credential storage system"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 19,
    "question": "What is the purpose of 'input' step in Jenkins pipelines?",
    "options": [
      "To fetch data from a file",
      "To pause execution and wait for user approval",
      "To pass data to another pipeline",
      "To generate a log report"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 20,
    "question": "Which Jenkins concept enables managing complex CI/CD workflows across branches?",
    "options": [
      "Parameterized Build",
      "Multibranch Pipeline",
      "Freestyle Project",
      "Pipeline Scripted DSL"
    ],

    "correctAnswer": 1,
    "level": "advanced"
  }
]