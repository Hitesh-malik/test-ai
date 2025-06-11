export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    level: 'beginner' | 'intermediate' | 'advanced';
  }
  