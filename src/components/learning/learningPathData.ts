// File: src/components/learning/learningPathData.ts

export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced' | '';
export type ModalStep = 'closed' | 'optionSelection' | 'experience' | 'quiz';

export interface ModuleData {
  id: string;
  title: string;
  description: string;
  sequenceOrder: number;
  lessons?: LessonData[];
}

export interface LessonData {
  id: string;
  title: string;
  sequenceOrder: number;
  content?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

// Example subjects for inspiration section
export const suggestedSubjects = [
  "Core Java",
  "Object-Oriented Programming with Java",
  "Spring Framework Fundamentals",
  "Spring Boot for Java Developers",
  "Spring Boot for RESTful APIs",
  "RESTful Services in Java",
  "Building Microservices with Spring Cloud",
  "Hibernate Framework for Java",
  "DevOps for Java Developers",
  "Continuous Integration and Delivery with Jenkins",
  "DevOps Tools & Technologies",
  "Git & GitHub",
  "Infrastructure as Code with Terraform",
  "Linux & Shell Scripting",
  "Docker for Java",
  "DevOps Engineering",
  "AWS For DevOps",
  "Managing Infrastructure with Ansible",
  "JUnit & Testing",
  "SQL Developer",
  "Maven"
];
// Animation variants that are shared across components
export const animationVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    }
  },

  card: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: {
      y: -5,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { type: "spring", stiffness: 300, damping: 10 }
    },
    selected: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 300, damping: 10 }
    }
  },

  modal: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  },

  backdrop: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  }
};