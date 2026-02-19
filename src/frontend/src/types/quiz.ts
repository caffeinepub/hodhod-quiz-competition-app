export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  imageUrl?: string;
}

export type GameState = 'idle' | 'playing' | 'gameOver' | 'victory';

export interface GameOverReason {
  type: 'wrongAnswer' | 'timeout';
  questionIndex: number;
  correctAnswer?: string;
}
