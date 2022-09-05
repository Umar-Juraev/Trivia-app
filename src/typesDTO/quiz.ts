export type QuizDTO = {
  category: string;
  correct_answer: string;
  difficulty: string;
  id?: number;
  incorrect_answers: string[];
  isCorrect?: any;
  question: string;
  type: string;
};

