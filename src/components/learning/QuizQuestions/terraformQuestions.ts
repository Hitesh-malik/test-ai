import { QuizQuestion } from "./type";
export const terraformQuestions: QuizQuestion[] = [
    {
        "id": 1,
        "question": "What is Infrastructure as Code (IaC)?",
        "options": [
            "Code that runs on infrastructure servers",
            "Managing and provisioning infrastructure through machine-readable definition files",
            "Writing code that automatically scales based on infrastructure needs",
            "The practice of coding while connected to cloud infrastructure"
        ],
        "correctAnswer": 1,
        "level": "beginner"
    },
    {
        "id": 2,
        "question": "What language is primarily used to write Terraform configurations?",
        "options": [
            "YAML",
            "JSON",
            "HCL (HashiCorp Configuration Language)",
            "XML"
        ],
        "correctAnswer": 2,
        "level": "beginner"
    },
    {
        "id": 3,
        "question": "What is the purpose of the 'terraform init' command?",
        "options": [
            "To create a new infrastructure from scratch",
            "To initialize a working directory containing Terraform configuration files",
            "To start the Terraform server",
            "To initialize AWS credentials"
        ],
        "correctAnswer": 1,
        "level": "beginner"
    },
    {
        "id": 4,
        "question": "What file extension is typically used for Terraform configuration files?",
        "options": [
            ".tf",
            ".tfm",
            ".terra",
            ".hcl"
        ],

        "correctAnswer": 0,
        "level": "beginner"
    },
    {
        "id": 5,
        "question": "What command is used to preview the changes Terraform will make to infrastructure?",
        "options": [
            "terraform preview",
            "terraform plan",
            "terraform show",
            "terraform check"
        ],
        "correctAnswer": 1,
        "level": "beginner"
    },
    {
        "id": 6,
        "question": "What are Terraform providers?",
        "options": [
            "Companies that offer Terraform as a service",
            "Plugins that allow Terraform to interact with cloud providers and other APIs",
            "Entities that provide financial backing for Terraform development",
            "Special repositories where Terraform code is stored"
        ],
        "correctAnswer": 1,
        "level": "intermediate"
    },
    {
        "id": 7,
        "question": "What is a Terraform module?",
        "options": [
            "A collection of resources that are managed together",
            "A single resource in Terraform",
            "A type of provider for modular infrastructure",
            "A plugin for the Terraform CLI"
        ],
        "correctAnswer": 0,
        "level": "intermediate"
    },
    {
        "id": 8,
        "question": "How does Terraform keep track of the resources it manages?",
        "options": [
            "By storing resource IDs in memory",
            "Using a state file that maps configurations to real-world resources",
            "By querying the cloud provider API each time",
            "Through a centralized database maintained by HashiCorp"
        ],

        "correctAnswer": 1,
        "level": "intermediate"
    },
    {
        "id": 9,
        "question": "What command applies the changes required to reach the desired state in the Terraform configuration?",
        "options": [
            "terraform run",
            "terraform execute",
            "terraform apply",
            "terraform update"
        ],
        "correctAnswer": 2,
        "level": "intermediate"
    },
    {
        "id": 10,
        "question": "What is a Terraform workspace?",
        "options": [
            "A graphical user interface for Terraform",
            "A physical location where Terraform runs",
            "A managed service for running Terraform in the cloud",
            "A feature that allows managing multiple states with the same configuration"
        ],
        "correctAnswer": 3,
        "level": "intermediate"
    },
    {
        "id": 11,
        "question": "What is the purpose of the 'terraform.tfvars' file?",
        "options": [
            "To define resources to be created",
            "To specify Terraform providers",
            "To assign values to variables defined in the configuration",
            "To override Terraform built-in functions"
        ],
        "correctAnswer": 2,
        "level": "intermediate"
    },
    {
        "id": 12,
        "question": "What does 'terraform destroy' do?",
        "options": [
            "Deletes the Terraform installation",
            "Destroys the Terraform state file",
            "Removes all resources defined in the Terraform configuration",
            "Resets the Terraform workspace"

        ],
        "correctAnswer": 2,
        "level": "intermediate"
    },
    {
        "id": 13,
        "question": "What is a remote backend in Terraform?",
        "options": [
            "A cloud provider that runs Terraform operations",
            "A location for storing the Terraform state file outside the local filesystem",
            "A separate server that processes Terraform commands remotely",
            "A backup of Terraform configurations"
        ],
        "correctAnswer": 1,
        "level": "intermediate"
    },
    {
        "id": 14,
        "question": "What is Terraform's 'count' parameter used for?",
        "options": [
            "Counting the number of resources in the state file",
            "Creating multiple instances of a resource",
            "Setting a limit on resource creation",
            "Calculating the cost of resources"
        ],
        "correctAnswer": 1,
        "level": "intermediate"
    },
    {
        "id": 15,
        "question": "What is the difference between 'terraform refresh' and 'terraform plan'?",
        "options": [
            "refresh updates the state file while plan shows proposed changes",
            "refresh runs faster than plan",
            "refresh works with remote state while plan works with local state",
            "refresh is deprecated and plan is the recommended approach"
        ],
        "correctAnswer": 0,
        "level": "intermediate"
    },
    {
        "id": 16,
        "question": "What is a Terraform null_resource?",
        "options": [
            "A resource that contains invalid configuration",
            "A placeholder that doesn't create any infrastructure but can run provisioners",
            "A testing mechanism to validate configurations without execution",
            "A way to declare empty variables"

        ],
        "correctAnswer": 1,
        "level": "advanced"
    },
    {
        "id": 17,
        "question": "What is Terraform's 'for_each' feature used for?",
        "options": [
            "Iterating through lists only",
            "Creating multiple instances of a resource using a map or set of strings",
            "Looping through modules only",
            "Executing scripts for each resource created"
        ],
        "correctAnswer": 1,
        "level": "advanced"
    },
    {
        "id": 18,
        "question": "What is a Terraform import?",
        "options": [
            "A way to include external configuration files",
            "A feature to bring existing infrastructure under Terraform management",
            "A method to import modules from the Terraform Registry",
            "A technique to copy resources between workspaces"
        ],
        "correctAnswer": 1,
        "level": "advanced"
    },
    {
        "id": 19,
        "question": "What is Terraform Cloud's Sentinel policy as code?",
        "options": [
            "A security system for the Terraform Registry",
            "A language for writing provable security policies",
            "A policy that enforces secure communication with cloud providers",
            "A tool for scanning Terraform code for security vulnerabilities"
        ],
        "correctAnswer": 1,
        "level": "advanced"
    },
    {
        "id": 20,
        "question": "What is a state lock in Terraform?",
        "options": [
            "A mechanism to prevent concurrent modifications to the same infrastructure",
            "A way to mark state as read-only",
            "A security feature to prevent unauthorized state access",
            "A technique to lock specific resources from being modified"

        ],
        "correctAnswer": 0,
        "level": "advanced"
    }
]