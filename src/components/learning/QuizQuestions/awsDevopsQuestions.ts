import { QuizQuestion } from "./type";
export const awsDevopsQuestions: QuizQuestion[] = [
  {
    "id": 1,
    "question": "What is AWS CloudFormation primarily used for?",
    "options": [
      "Monitoring AWS resources",
      "Provisioning infrastructure as code",
      "Managing container orchestration",
      "Configuring load balancers"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 2,
    "question": "Which AWS service provides a complete solution for continuous integration and continuous delivery?",
    "options": [
      "AWS CodeBuild",
      "AWS CodeCommit",
      "AWS CodePipeline",
      "AWS CodeDeploy"
    ],
    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 3,
    "question": "What is the primary purpose of Amazon EC2 in a DevOps environment?",
    "options": [
      "To provide virtual servers in the cloud",
      "To store application code",
      "To manage database services",
      "To provide monitoring tools"
    ],
    "correctAnswer": 0,
    "level": "beginner"
  },
  {
    "id": 4,
    "question": "Which AWS service is used to store Docker container images?",
    "options": [
      "Amazon S3",
      "AWS Lambda",
      "Amazon ECR (Elastic Container Registry)",
      "AWS Fargate"

    ],
    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 5,
    "question": "What AWS service would you use to create an automated build process for your application code?",
    "options": [
      "AWS CodePipeline",
      "AWS CloudFormation",
      "AWS CodeBuild",
      "AWS Config"
    ],
    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 6,
    "question": "What is AWS Elastic Beanstalk?",
    "options": [
      "A container orchestration service",
      "A platform service that deploys and scales web applications automatically",
      "A storage service for application artifacts",
      "A database migration service"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 7,
    "question": "Which AWS service allows you to run containers without managing the underlying infrastructure?",
    "options": [
      "Amazon ECS with EC2 launch type",
      "AWS Fargate",
      "Amazon EC2 Container Instances",
      "Amazon EKS with self-managed nodes"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 8,
    "question": "What is the purpose of AWS Systems Manager Parameter Store?",
    "options": [
      "To provision AWS resources",
      "To store and manage configuration data securely",

      "To monitor application performance",
      "To manage container orchestration"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 9,
    "question": "How does AWS CloudWatch help in DevOps practices?",
    "options": [
      "By providing version control for your code",
      "By monitoring resources and applications",
      "By automating infrastructure deployment",
      "By managing container orchestration"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 10,
    "question": "What is AWS CodeArtifact used for?",
    "options": [
      "Building and testing code",
      "Managing artifact repositories for software development",
      "Deploying applications to production",
      "Monitoring application performance"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 11,
    "question": "Which AWS service provides a central location to collect and analyze logs from different AWS resources?",
    "options": [
      "AWS CloudTrail",
      "Amazon CloudWatch Logs",
      "AWS X-Ray",
      "Amazon QuickSight"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 12,
    "question": "What is the primary purpose of AWS CodeDeploy?",
    "options": [
      "To store application code in repositories",

      "To automate code deployments to various compute services",
      "To build and test code automatically",
      "To create infrastructure using code"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 13,
    "question": "What is AWS CloudFormation drift detection used for?",
    "options": [
      "Identifying differences between your template and actual resource configuration",
      "Detecting network latency issues",
      "Monitoring CPU utilization",
      "Tracking code changes in repositories"
    ],
    "correctAnswer": 0,
    "level": "intermediate"
  },
  {
    "id": 14,
    "question": "Which AWS service allows you to define infrastructure as code using familiar programming languages like Python or TypeScript?",
    "options": [
      "AWS CloudFormation",
      "AWS CDK (Cloud Development Kit)",
      "AWS SAM (Serverless Application Model)",
      "AWS Elastic Beanstalk"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 15,
    "question": "What is the purpose of AWS X-Ray in DevOps?",
    "options": [
      "To scan infrastructure for security vulnerabilities",
      "To trace and analyze requests as they travel through your application",
      "To monitor database performance",
      "To track code changes in repositories"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 16,
    "question": "Which AWS service helps implement GitOps-like workflows for infrastructure and service deployment?",

    "options": [
      "AWS Proton",
      "AWS CodePipeline",
      "AWS CodeStar",
      "AWS AppConfig"
    ],
    "correctAnswer": 0,
    "level": "advanced"
  },
  {
    "id": 17,
    "question": "What is AWS Step Functions used for in advanced DevOps pipelines?",
    "options": [
      "Orchestrating multiple AWS services into serverless workflows",
      "Managing Kubernetes clusters",
      "Automating database schema migrations",
      "Generating infrastructure documentation"
    ],
    "correctAnswer": 0,
    "level": "advanced"
  },
  {
    "id": 18,
    "question": "How can you implement immutable infrastructure in AWS?",
    "options": [
      "By using AWS Backup to create regular backups",
      "By creating new infrastructure for each deployment instead of updating existing resources",
      "By enabling versioning on S3 buckets",
      "By implementing strict IAM policies"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 19,
    "question": "What is AWS Control Tower best used for in enterprise DevOps environments?",
    "options": [
      "Setting up and governing secure, compliant multi-account AWS environments",
      "Managing container orchestration across accounts",
      "Automating database deployments",
      "Implementing continuous integration pipelines"
    ],
    "correctAnswer": 0,
    "level": "advanced"
  },
  {
    "id": 20,
    "question": "How does AWS Service Catalog enhance DevOps practices in large organizations?",

    "options": [
      "By providing automated monitoring for all AWS services",
      "By allowing IT administrators to create approved products for users to deploy",
      "By automating infrastructure testing",
      "By managing code deployment across multiple regions"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  }
]