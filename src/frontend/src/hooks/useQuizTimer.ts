import { useState, useEffect, useCallback } from 'react';

interface UseQuizTimerProps {
  duration: number;
  onExpire: () => void;
  isActive: boolean;
}

export function useQuizTimer({ duration, onExpire, isActive }: UseQuizTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState(duration);

  const reset = useCallback(() => {
    setTimeRemaining(duration);
  }, [duration]);

  useEffect(() => {
    if (!isActive) return;

    setTimeRemaining(duration);

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onExpire();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [duration, onExpire, isActive]);

  return { timeRemaining, reset };
}
