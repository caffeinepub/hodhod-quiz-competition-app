import { useQuizTimer } from '../hooks/useQuizTimer';
import { Progress } from '@/components/ui/progress';
import { Clock } from 'lucide-react';

interface QuizTimerProps {
  duration: number;
  onExpire: () => void;
  isActive: boolean;
}

export function QuizTimer({ duration, onExpire, isActive }: QuizTimerProps) {
  const { timeRemaining } = useQuizTimer({ duration, onExpire, isActive });

  const percentage = (timeRemaining / duration) * 100;
  const isUrgent = timeRemaining <= 3;
  const isWarning = timeRemaining <= 5 && timeRemaining > 3;

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className={`h-6 w-6 ${isUrgent ? 'text-destructive animate-pulse' : isWarning ? 'text-warning' : 'text-primary'}`} />
          <span className="text-sm font-medium text-muted-foreground">زمان باقی‌مانده</span>
        </div>
        <div
          className={`text-4xl font-black tabular-nums ${
            isUrgent ? 'text-destructive animate-pulse' : isWarning ? 'text-warning' : 'text-primary'
          }`}
        >
          {timeRemaining}
        </div>
      </div>
      <div className="relative">
        <Progress
          value={percentage}
          className={`h-3 ${isUrgent ? '[&>div]:bg-destructive' : isWarning ? '[&>div]:bg-warning' : '[&>div]:bg-primary'}`}
        />
      </div>
    </div>
  );
}
