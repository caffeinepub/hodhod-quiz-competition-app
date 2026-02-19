import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Sparkles, RotateCcw } from 'lucide-react';

interface VictoryScreenProps {
  onRestart: () => void;
}

export function VictoryScreen({ onRestart }: VictoryScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10" dir="rtl">
      <Card className="w-full max-w-md border-2 border-primary/30 shadow-2xl">
        <CardHeader className="text-center space-y-4 pb-4">
          <div className="flex justify-center relative">
            <Trophy className="h-20 w-20 text-primary animate-bounce" />
            <Sparkles className="h-8 w-8 text-warning absolute -top-2 -right-2 animate-pulse" />
            <Sparkles className="h-8 w-8 text-warning absolute -top-2 -left-2 animate-pulse" />
          </div>
          <CardTitle className="text-4xl font-black text-primary">
            تبریک! شما برنده شدید!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <div className="space-y-2">
            <p className="text-lg text-muted-foreground">
              شما به تمام ۴ سوال پاسخ صحیح دادید
            </p>
            <div className="flex justify-center gap-2 text-3xl">
              <span>🎉</span>
              <span>🏆</span>
              <span>⭐</span>
              <span>🎊</span>
            </div>
          </div>

          <div className="pt-4">
            <Button
              onClick={onRestart}
              size="lg"
              className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90"
            >
              <RotateCcw className="ml-2 h-5 w-5" />
              بازی مجدد
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
