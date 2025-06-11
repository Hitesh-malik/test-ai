import { QuizQuestion } from "./type";
export const devopsEngineeringQuestions: QuizQuestion[] = [
  {
    "id": 1,
    "question": "What is the primary goal of DevOps?",
    "options": [
      "To eliminate the need for operations teams",
      "To reduce infrastructure costs",
      "To improve collaboration between development and operations teams for faster delivery",
      "To replace manual testing with automated testing"
    ],
    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 2,
    "question": "What does CI/CD stand for in DevOps?",
    "options": [
      "Continuous Integration/Continuous Deployment",
      "Computer Interface/Computer Development",
      "Containerized Implementation/Containerized Deployment",
      "Consistent Integration/Certified Delivery"
    ],
    "correctAnswer": 0,
    "level": "beginner"
  },
  {
    "id": 3,
    "question": "Which of the following is a core principle of DevOps?",
    "options": [
      "All testing should be done manually",
      "Development and operations should work in isolation",
      "Automation of repetitive tasks",
      "Changes should be deployed in large batches"
    ],
    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 4,
    "question": "What is Infrastructure as Code (IaC)?",
    "options": [
      "Writing applications that manage infrastructure",
      "Managing infrastructure through code and automation rather than manual processes",
      "Converting physical servers to virtual machines",
      "Coding directly on production servers"
    ],

    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 5,
    "question": "Which of the following is NOT a common DevOps tool?",
    "options": [
      "Jenkins",
      "Docker",
      "Adobe Photoshop",
      "Ansible"
    ],
    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 6,
    "question": "What is meant by 'Continuous Integration' in DevOps?",
    "options": [
      "Constantly monitoring application performance",
      "Integrating security tools into deployment pipelines",
      "Frequently merging code changes into a central repository with automated builds and tests",
      "Ensuring continuous uptime of production systems"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 7,
    "question": "What is a primary benefit of containerization in DevOps?",
    "options": [
      "It eliminates the need for testing",
      "It enables applications to run consistently across different environments",
      "It reduces the need for code reviews",
      "It guarantees zero downtime"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 8,
    "question": "Which of the following is a configuration management tool?",
    "options": [
      "Docker",
      "Jenkins",
      "Ansible",
      "Kubernetes"
    ],

    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 9,
    "question": "What is a key component of a monitoring strategy in DevOps?",
    "options": [
      "Manual checking of system status daily",
      "Collecting logs and metrics to provide visibility into system health",
      "Performing system maintenance only when issues arise",
      "Keeping monitoring information restricted to the operations team"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 10,
    "question": "What is a 'blue-green' deployment?",
    "options": [
      "A deployment that requires environmental certifications",
      "A strategy using two identical environments where one is live and one is idle",
      "A deployment to development (blue) then to production (green)",
      "A deployment method for high-security (blue) vs. low-security (green) applications"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 11,
    "question": "What does 'shift left' refer to in DevOps security?",
    "options": [
      "Moving monitoring responsibilities to developers",
      "Moving deployment to earlier in the week",
      "Moving security testing and implementation earlier in the development process",
      "Moving infrastructure configuration to the beginning of projects"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 12,
    "question": "What is the purpose of a CI/CD pipeline?",
    "options": [
      "To eliminate the need for testing",
      "To automate the steps required to deliver a new version of software",
      "To replace development teams with operations teams",
      "To increase the cost of software development"
    ],

    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 13,
    "question": "How does Infrastructure as Code improve DevOps practices?",
    "options": [
      "By eliminating the need for operations staff",
      "By making changes to infrastructure traceable, repeatable, and testable",
      "By reducing the need for developers to write application code",
      "By removing the need for testing environments"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 14,
    "question": "What is a key challenge in implementing microservices architecture in DevOps?",
    "options": [
      "Simplified deployment process",
      "Reduced need for monitoring",
      "Increased complexity in service dependencies and management",
      "Less need for automation"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 15,
    "question": "What role does automation play in DevOps?",
    "options": [
      "It is optional and only necessary for large organizations",
      "It is central to DevOps, enabling consistency, speed, and reliability",
      "It is only important for testing, not for deployment",
      "It is mainly used to replace human operators"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 16,
    "question": "What is 'Chaos Engineering' in DevOps?",
    "options": [
      "Writing code without documentation",
      "The practice of deliberately introducing failures to test system resilience",
      "Allowing developers to deploy directly to production",
      "Having no standardized deployment process"
    ],

    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 17,
    "question": "What is a 'service mesh' in microservices architecture?",
    "options": [
      "A physical network of servers",
      "A dedicated infrastructure layer for handling service-to-service communication",
      "A mesh of Docker containers",
      "A network security system"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 18,
    "question": "What approach does GitOps use for infrastructure and application deployment?",
    "options": [
      "Manual approval processes for all changes",
      "Using Git as a single source of truth for declarative infrastructure and applications",
      "Completely removing version control from deployment",
      "Focusing exclusively on containerization without version control"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 19,
    "question": "What is the concept of 'observability' in modern DevOps practices?",
    "options": [
      "The practice of having managers observe developers working",
      "The ability to infer internal states of a system based on external outputs",
      "The process of documenting system architecture",
      "The use of cameras to monitor data centers"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 20,
    "question": "What is 'DevSecOps' and how does it extend DevOps?",
    "options": [
      "It's a separate alternative to DevOps focused only on security",
      "It integrates security practices within the DevOps process, making security a shared responsibility throughout the lifecycle",
      "It's a tool for automating security updates",
      "It shifts responsibility for security exclusively to the operations team"

    ],
    "correctAnswer": 1,
    "level": "advanced"
  }
]