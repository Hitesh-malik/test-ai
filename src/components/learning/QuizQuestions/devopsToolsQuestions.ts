import { QuizQuestion } from "./type";
export const devopsToolsQuestions: QuizQuestion[] = [
  {
    "id": 1,
    "question": "What is the primary goal of DevOps?",
    "options": [
      "Reduce the number of developers",
      "Outsource infrastructure management",
      "Bridge the gap between development and operations for faster delivery",
      "Replace manual testing with automated scripting"
    ],
    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 2,
    "question": "Which DevOps tool is widely used for infrastructure as code?",
    "options": [
      "Jenkins",
      "Docker",
      "Terraform",
      "Nagios"
    ],
    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 3,
    "question": "Which tool is primarily used for containerization in DevOps?",
    "options": [
      "Puppet",
      "Docker",
      "Jenkins",
      "Maven"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 4,
    "question": "Which of the following is a version control system commonly used in DevOps?",
    "options": [
      "Chef",
      "Kubernetes",
      "Git",
      "Docker"
    ],

    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 5,
    "question": "Which of these tools helps automate software builds and deployments?",
    "options": [
      "Jenkins",
      "Prometheus",
      "Ansible",
      "ELK Stack"
    ],
    "correctAnswer": 0,
    "level": "beginner"
  },
  {
    "id": 6,
    "question": "Which DevOps tool is used to orchestrate containerized applications?",
    "options": [
      "Git",
      "Kubernetes",
      "Jenkins",
      "Vagrant"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 7,
    "question": "What is the purpose of Ansible in DevOps?",
    "options": [
      "Container orchestration",
      "Log monitoring",
      "Configuration management and automation",
      "Source control"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 8,
    "question": "Which DevOps tool helps monitor application performance and infrastructure metrics?",
    "options": [
      "Kubernetes",
      "Terraform",
      "Prometheus",
      "Jenkins"
    ],

    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 9,
    "question": "Which tool is used to provision and manage cloud infrastructure using declarative configuration files?",
    "options": [
      "Kubernetes",
      "Terraform",
      "Nagios",
      "ELK"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 10,
    "question": "What is the main use of Docker Compose?",
    "options": [
      "Building Docker images",
      "Managing virtual machines",
      "Defining and running multi-container Docker applications",
      "Monitoring Docker containers"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 11,
    "question": "What does CI/CD stand for?",
    "options": [
      "Container Integration / Container Delivery",
      "Continuous Integration / Continuous Deployment",
      "Code Inspection / Code Delivery",
      "Cloud Integration / Cloud Deployment"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 12,
    "question": "Which logging stack is commonly used in DevOps to collect and analyze logs?",
    "options": [
      "Kubernetes Stack",
      "Terraform Stack",
      "ELK Stack",
      "Prometheus Stack"

    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 13,
    "question": "Which DevOps practice ensures that code changes are automatically tested and integrated frequently?",
    "options": [
      "Blue-green deployment",
      "Continuous Integration",
      "Infrastructure as Code",
      "Monitoring as a Service"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 14,
    "question": "What is Helm used for in the context of Kubernetes?",
    "options": [
      "Monitoring Kubernetes nodes",
      "Automating Kubernetes cluster provisioning",
      "Managing Kubernetes packages (charts)",
      "Container image scanning"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 15,
    "question": "What is the purpose of a reverse proxy like NGINX in a DevOps pipeline?",
    "options": [
      "Compile application code",
      "Scan Docker images",
      "Route traffic to backend services",
      "Manage source code"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 16,
    "question": "Which statement best defines GitOps?",
    "options": [
      "Managing Kubernetes secrets using Git",
      "CI/CD workflow where Git is the single source of truth for declarative infrastructure",
      "Automating serverless applications",

      "Versioning Docker images"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 17,
    "question": "What is the main purpose of blue-green deployment?",
    "options": [
      "Color-based versioning of Docker images",
      "Load testing the green environment before production release",
      "Reducing downtime and risk by running two identical production environments",
      "Encrypting deployment traffic"
    ],
    "correctAnswer": 2,
    "level": "advanced"
  },
  {
    "id": 18,
    "question": "How does HashiCorp Vault help in DevOps?",
    "options": [
      "Automates infrastructure provisioning",
      "Builds and tests source code",
      "Securely manages secrets, tokens, and credentials",
      "Monitors Kubernetes clusters"
    ],
    "correctAnswer": 2,
    "level": "advanced"
  },
  {
    "id": 19,
    "question": "What is the main benefit of immutable infrastructure?",
    "options": [
      "Allows in-place updates on production",
      "Improves performance by using fixed disk size",
      "Ensures infrastructure is replaced rather than modified, reducing inconsistencies",
      "Locks down configuration settings"
    ],
    "correctAnswer": 2,
    "level": "advanced"
  },
  {
    "id": 20,
    "question": "Which advanced DevOps tool is used for policy-as-code enforcement in Kubernetes?",
    "options": [
      "Vault",
      "Falco",
      "OPA (Open Policy Agent)",

      "Grafana"
    ],
    "correctAnswer": 2,
    "level": "advanced"
  }
]