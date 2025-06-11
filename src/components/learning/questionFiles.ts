// File: src/components/learning/questionFiles.ts
import { QuizQuestion } from './quizData';

// Import all question files
// Currently available files
import { javaQuestions } from './quizData';
// Import all the other question files - these will be uncommented as each file is created
import { ansibleQuestions } from './QuizQuestions/ansibleQuestions';
import { awsDevopsQuestions } from './QuizQuestions/awsDevopsQuestions';
import { coreJavaQuestions } from './QuizQuestions/coreJavaQuestions';
import { devopsEngineeringQuestions } from './QuizQuestions/devopsEngineeringQuestions';
import { devopsJavaQuestions } from './QuizQuestions/devopsJavaQuestions';
import { devopsToolsQuestions } from './QuizQuestions/devopsToolsQuestions';
import { dockerJavaQuestions } from './QuizQuestions/dockerJavaQuestions';
import { gitGithubQuestions } from './QuizQuestions/gitGithubQuestions';
import { hibernateQuestions } from './QuizQuestions/hibernateQuestions';
import { jenkinsQuestions } from './QuizQuestions/jenkinsQuestions';
import { junitTestingQuestions } from './QuizQuestions/junitTestingQuestions';
import { linuxShellQuestions } from './QuizQuestions/linuxShellQuestions';
import { mavenQuestions } from './QuizQuestions/mavenQuestions';
import { oopJavaQuestions } from './QuizQuestions/oopJavaQuestions';
import { restfulJavaQuestions } from './QuizQuestions/restfulJavaQuestions';
import { springBootJavaQuestions } from './QuizQuestions/springBootQuestions';
import { springBootRestQuestions } from './QuizQuestions/springBootRestQuestions';
import { springCloudMicroservicesQuestions } from './QuizQuestions/springCloudMicroservicesQuestions';
import { springFrameWorkQuestions } from './QuizQuestions/springFramework';
import { sqlDeveloperQuestions } from './QuizQuestions/sqlDeveloperQuestions';
import { terraformQuestions } from './QuizQuestions/terraformQuestions';

// Create a mapping between subject names and their corresponding question sets
const questionSets: Record<string, QuizQuestion[]> = {
  // Default set for fallback
  "Default": javaQuestions,
  
  // Map each subject to its corresponding question file
  "Core Java": coreJavaQuestions,
  "Object-Oriented Programming with Java": oopJavaQuestions,
  "Spring Framework Fundamentals": springFrameWorkQuestions,
  "Spring Boot for Java Developers": springBootJavaQuestions,
  "Spring Boot for RESTful APIs": springBootRestQuestions,
  "RESTful Services in Java": restfulJavaQuestions,
  "Building Microservices with Spring Cloud": springCloudMicroservicesQuestions,
  "Hibernate Framework for Java": hibernateQuestions,
  "DevOps for Java Developers": devopsJavaQuestions,
  "Continuous Integration and Delivery with Jenkins": jenkinsQuestions,
  "DevOps Tools & Technologies": devopsToolsQuestions,
  "Git & GitHub": gitGithubQuestions,
  "Infrastructure as Code with Terraform": terraformQuestions,
  "Linux & Shell Scripting": linuxShellQuestions,
  "Docker for Java": dockerJavaQuestions,
  "DevOps Engineering": devopsEngineeringQuestions,
  "AWS For DevOps": awsDevopsQuestions,
  "Managing Infrastructure with Ansible": ansibleQuestions,
  "JUnit & Testing": junitTestingQuestions,
  "SQL Developer": sqlDeveloperQuestions,
  "Maven": mavenQuestions
};

/**
 * Gets the questions for a specific subject.
 * If the subject doesn't exist in our mapping, falls back to Java questions.
 */
export function getQuestionsForSubject(subject: string): QuizQuestion[] {
  // Try to get the specific questions for this subject
  const questions = questionSets[subject];
  
  // If questions exist for this subject, return them
  if (questions && questions.length > 0) {
    return questions;
  }
  
  // If no questions exist yet for this subject, fall back to the default set
  console.warn(`No questions found for subject: ${subject}. Using default Java questions instead.`);
  return questionSets["Default"];
}

/**
 * Determines if we have questions available for a given subject
 */
export function hasQuestionsForSubject(subject: string): boolean {
  return !!questionSets[subject] && questionSets[subject].length > 0;
}

/**
 * Returns a list of all subjects that have questions available
 */
export function getAvailableSubjects(): string[] {
  return Object.keys(questionSets).filter(key => {
    return key !== "Default" && !!questionSets[key] && questionSets[key].length > 0;
  });
}

/**
 * Use this function to safely add a new question set when it becomes available.
 * This allows you to add question sets dynamically without having to update this file.
 */
export function registerQuestionSet(subject: string, questions: QuizQuestion[]): void {
  questionSets[subject] = questions;
  console.log(`Registered question set for: ${subject}`);
}