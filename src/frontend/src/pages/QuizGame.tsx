import { useEffect, useRef } from 'react';
import { useQuizGame } from '../hooks/useQuizGame';
import { StartScreen } from '../components/StartScreen';
import { QuestionDisplay } from '../components/QuestionDisplay';
import { QuizTimer } from '../components/QuizTimer';
import { GameOverScreen } from '../components/GameOverScreen';
import { VictoryScreen } from '../components/VictoryScreen';
import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export function QuizGame() {
  const {
    gameState,
    currentQuestionIndex,
    currentQuestion,
    currentCategory,
    gameOverReason,
    isLoading,
    selectedAnswer,
    isCorrect,
    startGame,
    handleAnswer,
    handleTimeout,
  } = useQuizGame();

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Manage background music playback
  useEffect(() => {
    if (gameState === 'playing') {
      // Start music when game starts
      if (audioRef.current) {
        audioRef.current.volume = 0.4;
        audioRef.current.play().catch((error) => {
          console.log('Audio playback failed:', error);
        });
      }
    } else {
      // Pause music when game is not playing
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [gameState]);

  if (gameState === 'idle') {
    return <StartScreen onStart={startGame} isLoading={isLoading} />;
  }

  if (gameState === 'gameOver' && gameOverReason) {
    return (
      <GameOverScreen
        reason={gameOverReason.type}
        questionNumber={gameOverReason.questionIndex}
        correctAnswer={gameOverReason.correctAnswer}
        onRestart={startGame}
      />
    );
  }

  if (gameState === 'victory') {
    return <VictoryScreen onRestart={startGame} />;
  }

  if (!currentQuestion || !currentCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-muted-foreground">در حال بارگذاری...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5" dir="rtl">
      {/* Background music audio element */}
      <audio
        ref={audioRef}
        src="/assets/generated/quiz-background-music.mp3"
        loop
        preload="auto"
      />

      <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-black text-primary">مسابقه هدهد</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="hidden sm:inline">فروشگاه هدهد</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          <Card className="p-6 border-2 border-primary/20 shadow-lg">
            <QuizTimer duration={12} onExpire={handleTimeout} isActive={gameState === 'playing' && selectedAnswer === null} />
          </Card>

          <Card className="p-8 border-2 border-primary/10 shadow-lg">
            <QuestionDisplay
              question={currentQuestion}
              categoryName={currentCategory.name}
              questionNumber={currentQuestionIndex + 1}
              onAnswer={handleAnswer}
              selectedAnswer={selectedAnswer}
              isCorrect={isCorrect}
            />
          </Card>
        </div>
      </main>

      <footer className="border-t border-border/40 bg-background/80 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>ساخته شده با</span>
              <Heart className="h-4 w-4 text-destructive fill-destructive" />
              <span>توسط</span>
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'hodhod-quiz'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                caffeine.ai
              </a>
            </div>
            <p className="text-xs">© {new Date().getFullYear()} فروشگاه هدهد</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
