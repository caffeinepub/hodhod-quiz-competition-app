import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Play, Flag, Trophy, Brain, Atom, Clock } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
  isLoading: boolean;
}

export function StartScreen({ onStart, isLoading }: StartScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10" dir="rtl">
      <Card className="w-full max-w-2xl border-2 border-primary/20 shadow-2xl">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="relative">
              <Trophy className="h-16 w-16 text-primary" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-warning rounded-full animate-ping" />
            </div>
          </div>
          <CardTitle className="text-4xl md:text-5xl font-black text-primary">
            مسابقه هدهد
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            آیا می‌توانید به ۴ سوال پاسخ دهید؟
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <Flag className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div className="text-right">
                <h3 className="font-bold text-foreground">پرچم کشورها</h3>
                <p className="text-sm text-muted-foreground">شناسایی پرچم‌های مختلف</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <Trophy className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div className="text-right">
                <h3 className="font-bold text-foreground">ورزشی</h3>
                <p className="text-sm text-muted-foreground">دانش ورزشی شما</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <Brain className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div className="text-right">
                <h3 className="font-bold text-foreground">هوش و ریاضی</h3>
                <p className="text-sm text-muted-foreground">تست هوش و منطق</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <Atom className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div className="text-right">
                <h3 className="font-bold text-foreground">علم و تکنولوژی</h3>
                <p className="text-sm text-muted-foreground">دانش علمی شما</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 p-4 bg-warning/10 border border-warning/20 rounded-lg">
            <Clock className="h-5 w-5 text-warning" />
            <p className="text-sm font-bold text-warning">
              هر سوال فقط ۷ ثانیه زمان دارد!
            </p>
          </div>

          <Button
            onClick={onStart}
            disabled={isLoading}
            size="lg"
            className="w-full h-16 text-xl font-black bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            {isLoading ? (
              'در حال بارگذاری...'
            ) : (
              <>
                <Play className="ml-2 h-6 w-6" />
                شروع بازی
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
