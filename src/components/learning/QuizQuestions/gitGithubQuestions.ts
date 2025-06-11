import { QuizQuestion } from "./type";
export const gitGithubQuestions: QuizQuestion[] = [
  {
    "id": 1,
    "question": "What is Git?",
    "options": [
      "A programming language",
      "A distributed version control system",
      "A remote repository hosting service",
      "An integrated development environment"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 2,
    "question": "What command is used to create a new Git repository?",
    "options": [
      "git start",
      "git create",
      "git init",
      "git new"
    ],
    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 3,
    "question": "What is the purpose of the 'git commit' command?",
    "options": [
      "To download changes from a remote repository",
      "To upload local changes to a remote repository",
      "To save changes to the local repository",
      "To merge branches together"
    ],
    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 4,
    "question": "What is GitHub primarily used for?",
    "options": [
      "Writing code collaboratively in real-time",
      "Hosting and sharing Git repositories",
      "Compiling and running code in the cloud",
      "Testing applications before deployment"
    ],
    "correctAnswer": 1,

    "level": "beginner"
  },
  {
    "id": 5,
    "question": "What Git command is used to create a new branch?",
    "options": [
      "git branch [branch-name]",
      "git checkout -b [branch-name]",
      "git create-branch [branch-name]",
      "Both A and B"
    ],
    "correctAnswer": 3,
    "level": "beginner"
  },
  {
    "id": 6,
    "question": "What is the difference between 'git merge' and 'git rebase'?",
    "options": [
      "They are different names for the same operation",
      "Merge creates a new commit that combines changes, while rebase moves commits to a new base",
      "Merge is only for local branches, rebase is only for remote branches",
      "Merge is automatic, rebase always requires manual conflict resolution"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 7,
    "question": "What is a Pull Request in GitHub?",
    "options": [
      "A request to pull changes from a remote repository",
      "A mechanism to fetch and merge changes from a remote branch",
      "A way to propose changes and request that someone review and merge them",
      "A technique to download code without modifying the working directory"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 8,
    "question": "How can you temporarily store changes that are not ready to be committed?",
    "options": [
      "git save",
      "git stash",
      "git store",
      "git cache"
    ],
    "correctAnswer": 1,

    "level": "intermediate"
  },
  {
    "id": 9,
    "question": "What does the command 'git reset --hard HEAD~1' do?",
    "options": [
      "Removes the last commit and all its changes",
      "Moves the HEAD pointer back one commit but keeps changes staged",
      "Merges the last commit with the previous one",
      "Creates a new branch from the previous commit"
    ],
    "correctAnswer": 0,
    "level": "intermediate"
  },
  {
    "id": 10,
    "question": "What is the purpose of a .gitignore file?",
    "options": [
      "To store Git configuration settings",
      "To list users who are not allowed to contribute to the repository",
      "To specify files that Git should ignore and not track",
      "To document which commands are not allowed in the repository"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 11,
    "question": "How do you resolve a merge conflict in Git?",
    "options": [
      "Use 'git resolve' to automatically fix all conflicts",
      "Use 'git conflict --solve' to list and resolve conflicts",
      "Manually edit the files to resolve conflicts, then add and commit them",
      "Use 'git checkout --theirs' to always use remote changes"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 12,
    "question": "What is the purpose of 'git cherry-pick'?",
    "options": [
      "To select the best commits from multiple branches",
      "To apply a specific commit from one branch to another",
      "To find and fix errors in previous commits",
      "To remove unwanted commits from the repository"
    ],
    "correctAnswer": 1,

    "level": "intermediate"
  },
  {
    "id": 13,
    "question": "What are GitHub Actions primarily used for?",
    "options": [
      "Editing files directly on GitHub",
      "Automating workflows like CI/CD, testing, and deployment",
      "Managing access permissions to repositories",
      "Creating custom user interfaces for GitHub projects"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 14,
    "question": "Which command would you use to view the commit history of a Git repository?",
    "options": [
      "git history",
      "git log",
      "git commits",
      "git show"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 15,
    "question": "What is Git bisect used for?",
    "options": [
      "Splitting a repository into multiple repositories",
      "Finding which commit introduced a bug using binary search",
      "Dividing work among team members",
      "Separating large commits into smaller ones"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 16,
    "question": "What are Git hooks?",
    "options": [
      "Special branch types that automatically sync with remote repositories",
      "URLs that trigger repository actions when accessed",
      "Scripts that run automatically when certain Git events occur",
      "Points in history where multiple branches converge"
    ],
    "correctAnswer": 2,

    "level": "advanced"
  },
  {
    "id": 17,
    "question": "What happens during an interactive rebase (git rebase -i)?",
    "options": [
      "Git asks for confirmation before each commit is applied",
      "Users can reorder, edit, squash, or drop commits before they are applied",
      "Git automatically resolves conflicts by prompting for the preferred version",
      "Multiple developers can collaborate on resolving conflicts in real-time"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 18,
    "question": "What is a Git submodule?",
    "options": [
      "A smaller module within a Git repository",
      "A repository included inside another repository",
      "A section of code that can be shared between repositories",
      "A separate branch that contains isolated features"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 19,
    "question": "What is a Conventional Commit?",
    "options": [
      "A commit that follows a standardized message format with type, scope, and description",
      "A commit that has been approved by all team members",
      "A commit that only changes one file",
      "A commit that is automatically generated by Git"
    ],
    "correctAnswer": 0,
    "level": "advanced"
  },
  {
    "id": 20,
    "question": "What are Git objects, and which of these is NOT a type of Git object?",
    "options": [
      "Blob",
      "Tree",
      "Commit",
      "Branch"
    ],
    "correctAnswer": 3,

    "level": "advanced"
  }
]