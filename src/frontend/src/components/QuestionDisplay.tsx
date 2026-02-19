import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { Question } from '../types/quiz';

interface QuestionDisplayProps {
  question: Question;
  categoryName: string;
  questionNumber: number;
  onAnswer: (index: number) => void;
  selectedAnswer: number | null;
  isCorrect: boolean | null;
}

export function QuestionDisplay({ 
  question, 
  categoryName, 
  questionNumber, 
  onAnswer,
  selectedAnswer,
  isCorrect 
}: QuestionDisplayProps) {
  const getButtonClassName = (index: number) => {
    const baseClasses = "h-auto min-h-[80px] text-lg font-bold border-2 transition-all duration-200";
    
    // If no answer selected yet, show normal hover states
    if (selectedAnswer === null) {
      return `${baseClasses} hover:border-primary hover:bg-primary/10 hover:scale-105 active:scale-95`;
    }
    
    // If this button was selected
    if (selectedAnswer === index) {
      if (isCorrect) {
        // Correct answer - green feedback
        return `${baseClasses} bg-green-500/20 border-green-500 text-green-700 dark:text-green-300 scale-105`;
      } else {
        // Incorrect answer - red feedback
        return `${baseClasses} bg-red-500/20 border-red-500 text-red-700 dark:text-red-300 scale-95`;
      }
    }
    
    // Other buttons when an answer is selected - dimmed
    return `${baseClasses} opacity-50`;
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
          <span className="text-sm font-bold text-primary">
            سوال {questionNumber} از ۴ • {categoryName}
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-foreground leading-tight">
          {question.questionText}
        </h2>
      </div>

      {question.imageUrl && (
        <div className="flex justify-center">
          <Card className="p-4 bg-card border-2 border-primary/20">
            <img
              src={question.imageUrl}
              alt="پرچم"
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
            />
          </Card>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => onAnswer(index)}
            variant="outline"
            size="lg"
            disabled={selectedAnswer !== null}
            className={getButtonClassName(index)}
          >
            <span className="flex items-center gap-3 w-full">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-black text-primary">
                {index + 1}
              </span>
              <span className="text-right flex-1">{option}</span>
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}
