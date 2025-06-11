// File: src/components/learning/services/quizService.ts
import { QuizQuestion } from '../quizData';
import { getQuestionsForSubject } from '../subjectToFileMapper';

export type QuizLevel = 'beginner' | 'intermediate';
export type QuizState = 'intro' | 'beginner-quiz' | 'beginner-results' | 'intermediate-quiz' | 'intermediate-results' | 'completed';
export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';

export interface QuizResult {
  level: QuizLevel;
  questionsCount: number;
  correctCount: number;
  score: number; 
  passed: boolean;
}

export class QuizService {
  private static PASSING_SCORE = 60; // 60% is passing
  private static QUESTIONS_PER_LEVEL = 7; // Number of questions per level
  
  // Get a set of questions for a specific level and subject
  public static getQuizQuestions(level: QuizLevel, subject: string): QuizQuestion[] {
    // Get all questions for the selected subject
    const allQuestions = getQuestionsForSubject(subject);
    
    // For beginner level, only use questions with ID 1-10
    // For intermediate level, only use questions with ID 11-20
    const filteredQuestions = level === 'beginner' 
      ? allQuestions.filter(q => q.id <= 10)
      : allQuestions.filter(q => q.id > 10 && q.id <= 20);
    
    // If we don't have enough questions after filtering, log a warning
    if (filteredQuestions.length < this.QUESTIONS_PER_LEVEL) {
      console.warn(`Not enough ${level} questions for subject ${subject}. Only found ${filteredQuestions.length}`);
    }
    
    // Shuffle the questions
    const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());
    
    // Take the first QUESTIONS_PER_LEVEL questions or as many as we have
    return shuffled.slice(0, Math.min(this.QUESTIONS_PER_LEVEL, shuffled.length));
  }
  
  // Calculate the result for a quiz level
  public static calculateResult(questions: QuizQuestion[], answers: number[]): QuizResult {
    const correctCount = answers.reduce((count, answer, index) => {
      if (answer === questions[index].correctAnswer) {
        return count + 1;
      }
      return count;
    }, 0);
    
    const score = Math.round((correctCount / questions.length) * 100);
    const passed = score >= this.PASSING_SCORE;
    
    return {
      level: questions[0].level as QuizLevel, // All questions should be of the same level
      questionsCount: questions.length,
      correctCount,
      score,
      passed
    };
  }
  
  // Determine the next state based on the current state and quiz result
  public static getNextState(currentState: QuizState, result?: QuizResult): QuizState {
    switch (currentState) {
      case 'intro':
        return 'beginner-quiz';
        
      case 'beginner-quiz':
        return 'beginner-results';
        
      case 'beginner-results':
        // If beginner quiz was passed, go to intermediate quiz, otherwise complete
        return result?.passed ? 'intermediate-quiz' : 'completed';
        
      case 'intermediate-quiz':
        return 'intermediate-results';
        
      case 'intermediate-results':
      case 'completed':
        return 'completed';
        
      default:
        return 'intro';
    }
  }
  
  // Determine the recommended experience level based on quiz results
  public static determineExperienceLevel(
    beginnerResult?: QuizResult, 
    intermediateResult?: QuizResult
  ): ExperienceLevel {
    // If no beginner result or beginner quiz failed
    if (!beginnerResult || !beginnerResult.passed) {
      return 'beginner';
    }
    
    // If beginner passed but no intermediate result or intermediate quiz failed
    if (!intermediateResult || !intermediateResult.passed) {
      return 'intermediate';
    }
    
    // If both beginner and intermediate quizzes passed
    return 'advanced';
  }
  
  // Get a friendly message based on the quiz results
  public static getResultMessage(
    beginnerResult?: QuizResult, 
    intermediateResult?: QuizResult
  ): string {
    if (!beginnerResult) {
      return "Let's start with some beginner questions to assess your knowledge level.";
    }
    
    if (!beginnerResult.passed) {
      return `You scored ${beginnerResult.score}% on the beginner quiz. We recommend starting with beginner-level content to build a solid foundation.`;
    }
    
    if (!intermediateResult) {
      return `Great job! You scored ${beginnerResult.score}% on the beginner quiz. Let's try some intermediate questions to further assess your knowledge.`;
    }
    
    if (!intermediateResult.passed) {
      return `You scored ${intermediateResult.score}% on the intermediate quiz. We recommend starting with intermediate-level content to strengthen your knowledge.`;
    }
    
    return `Excellent! You scored ${intermediateResult.score}% on the intermediate quiz. We'll provide you with advanced content to further enhance your skills.`;
  }
}