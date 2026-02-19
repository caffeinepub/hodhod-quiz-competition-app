import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { XCircle, Clock, RotateCcw } from 'lucide-react';

interface GameOverScreenProps {
  reason: 'wrongAnswer' | 'timeout';
  questionNumber: number;
  onRestart: () => void;
}

export function GameOverScreen({ reason, questionNumber, onRestart }: GameOverScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-destructive/5 via-background to-destructive/10" dir="rtl">
      <Card className="w-full max-w-md border-2 border-destructive/20 shadow-2xl">
        <CardHeader className="text-center space-y-4 pb-4">
          <div className="flex justify-center">
            {reason === 'timeout' ? (
              <Clock className="h-20 w-20 text-destructive animate-pulse" />
            ) : (
              <XCircle className="h-20 w-20 text-destructive animate-pulse" />
            )}
          </div>
          <CardTitle className="text-4xl font-black text-destructive">
            شما باختید!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <div className="space-y-2">
            <p className="text-lg text-muted-foreground">
              {reason === 'timeout' ? 'زمان شما به پایان رسید' : 'پاسخ اشتباه'}
            </p>
            <p className="text-2xl font-bold text-foreground">
              سوال {questionNumber + 1} از ۴
            </p>
          </div>

          <div className="pt-4">
            <Button
              onClick={onRestart}
              size="lg"
              className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90"
            >
              <RotateCcw className="ml-2 h-5 w-5" />
              شروع دوباره
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
