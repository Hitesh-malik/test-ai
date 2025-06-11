import { QuizQuestion } from "./type";
export const ansibleQuestions: QuizQuestion[] = [
  {
    "id": 1,
    "question": "What is Ansible primarily used for?",
    "options": [
      "Container orchestration",
      "Infrastructure automation and configuration management",
      "Database administration",
      "Network monitoring"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 2,
    "question": "What file format is commonly used for Ansible playbooks?",
    "options": [
      "XML",
      "JSON",
      "YAML",
      "INI"
    ],
    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 3,
    "question": "Which file is used to define the hosts that Ansible will manage?",
    "options": [
      "hosts.yml",
      "inventory",
      "ansible.cfg",
      "playbook.yml"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 4,
    "question": "What is an Ansible playbook?",
    "options": [
      "A document that contains a set of plays defining tasks to be executed on managed hosts",
      "A list of Ansible modules",
      "A configuration file for Ansible settings",
      "A list of hosts in the inventory"
    ],

    "correctAnswer": 0,
    "level": "beginner"
  },
  {
    "id": 5,
    "question": "Which command is used to run an Ansible playbook?",
    "options": [
      "ansible playbook.yml",
      "ansible-playbook playbook.yml",
      "ansible-run playbook.yml",
      "ansible-execute playbook.yml"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 6,
    "question": "What is an Ansible module?",
    "options": [
      "A grouping of servers in the inventory",
      "A complete automation job with multiple tasks",
      "A reusable unit of code that performs a specific action like managing a service or installing a package",
      "A Python script that installs Ansible"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 7,
    "question": "What is the purpose of Ansible handlers?",
    "options": [
      "To handle errors that occur during playbook execution",
      "To listen for notifications and execute tasks when notified by other tasks",
      "To manage external connections to target hosts",
      "To handle user input during playbook execution"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 8,
    "question": "What is the purpose of Ansible Vault?",
    "options": [
      "To store Ansible playbooks securely",
      "To encrypt sensitive data like passwords and keys",
      "To create virtual environments for Ansible",
      "To back up Ansible configurations"
    ],

    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 9,
    "question": "How do you define variables in Ansible?",
    "options": [
      "Variables can only be defined in the inventory file",
      "Variables can be defined in multiple places, including playbooks, inventory, and separate var files",
      "Variables can only be defined in playbooks",
      "Variables can only be passed via command line"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 10,
    "question": "What is the purpose of Ansible roles?",
    "options": [
      "To assign permissions to different users of Ansible",
      "To organize and structure playbooks into reusable components",
      "To define which hosts get which configurations",
      "To manage user accounts on target systems"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 11,
    "question": "What templating engine does Ansible use for generating files from templates?",
    "options": [
      "Twig",
      "Mustache",
      "Jinja2",
      "Handlebars"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 12,
    "question": "What is the purpose of the 'when' statement in Ansible?",
    "options": [
      "To create time-based tasks",
      "To set execution deadlines",
      "To conditionally execute tasks based on specific criteria",
      "To schedule recurring tasks"
    ],

    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 13,
    "question": "What is an Ansible fact?",
    "options": [
      "A documentation item in the Ansible guidebook",
      "A property of a target system automatically discovered by Ansible",
      "A verification step in a playbook",
      "A type of Ansible module"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 14,
    "question": "How do you loop over a list of items in Ansible?",
    "options": [
      "Using the 'for' statement",
      "Using the 'loop' keyword or 'with_items'",
      "Using the 'foreach' statement",
      "Using 'iterate' directive"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 15,
    "question": "What is the purpose of tags in Ansible playbooks?",
    "options": [
      "To categorize playbooks in the documentation",
      "To mark which servers should run specific tasks",
      "To selectively run or skip specific parts of a playbook",
      "To label variables for better readability"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 16,
    "question": "What is a dynamic inventory in Ansible?",
    "options": [
      "An inventory that changes automatically during playbook execution",
      "A script or plugin that generates inventory information dynamically from external sources",
      "An inventory that spans multiple data centers",
      "An inventory with a large number of hosts"
    ],

    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 17,
    "question": "What is the purpose of the 'strategy' keyword in Ansible playbooks?",
    "options": [
      "To define the overall approach for the infrastructure deployment",
      "To control how Ansible implements task parallelism across hosts",
      "To select which inventory to use",
      "To determine which modules to load"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 18,
    "question": "How can you create custom Ansible modules?",
    "options": [
      "By writing a Python script that follows Ansible module guidelines",
      "By modifying the Ansible source code directly",
      "By creating a playbook with a special 'module' directive",
      "Custom modules can only be created by the Ansible development team"
    ],
    "correctAnswer": 0,
    "level": "advanced"
  },
  {
    "id": 19,
    "question": "What is Ansible Galaxy primarily used for?",
    "options": [
      "Managing cloud infrastructure for Ansible",
      "Finding and sharing Ansible roles and collections",
      "Monitoring Ansible playbook execution",
      "Testing Ansible playbooks in isolated environments"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 20,
    "question": "What is the purpose of the 'serial' keyword in Ansible playbooks?",
    "options": [
      "To enforce sequential execution of all tasks",
      "To control how many hosts to manage in parallel during execution",
      "To ensure tasks run in a specific serial order",
      "To create sequential backup files"
    ],

    "correctAnswer": 1,
    "level": "advanced"
  }
]