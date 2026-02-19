import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import type { Question, GameState, GameOverReason } from '../types/quiz';
import {
  useGetFlagQuestions,
  useGetSportsQuestions,
  useGetIntelligenceQuestions,
  useGetScienceQuestions,
} from './useQueries';

export function useQuizGame() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameState, setGameState] = useState<GameState>('idle');
  const [gameOverReason, setGameOverReason] = useState<GameOverReason | null>(null);
  const [usedQuestionIndices, setUsedQuestionIndices] = useState<number[][]>([[], [], [], []]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const { data: flagQuestions = [], isLoading: loadingFlags } = useGetFlagQuestions();
  const { data: sportsQuestions = [], isLoading: loadingSports } = useGetSportsQuestions();
  const { data: intelligenceQuestions = [], isLoading: loadingIntelligence } = useGetIntelligenceQuestions();
  const { data: scienceQuestions = [], isLoading: loadingScience } = useGetScienceQuestions();

  const isLoading = loadingFlags || loadingSports || loadingIntelligence || loadingScience;

  const correctSoundRef = useRef<HTMLAudioElement | null>(null);
  const incorrectSoundRef = useRef<HTMLAudioElement | null>(null);

  // Initialize sound effects
  useEffect(() => {
    correctSoundRef.current = new Audio('/assets/generated/correct-answer-sound.mp3');
    incorrectSoundRef.current = new Audio('/assets/generated/incorrect-answer-sound.mp3');
    
    // Set volume for sound effects
    if (correctSoundRef.current) correctSoundRef.current.volume = 0.6;
    if (incorrectSoundRef.current) incorrectSoundRef.current.volume = 0.6;

    return () => {
      correctSoundRef.current = null;
      incorrectSoundRef.current = null;
    };
  }, []);

  const categories = useMemo(
    () => [
      { name: 'پرچم کشورها', questions: flagQuestions, nameEn: 'Flags' },
      { name: 'ورزشی', questions: sportsQuestions, nameEn: 'Sports' },
      { name: 'هوش و ریاضی', questions: intelligenceQuestions, nameEn: 'Intelligence' },
      { name: 'علم و تکنولوژی', questions: scienceQuestions, nameEn: 'Science' },
    ],
    [flagQuestions, sportsQuestions, intelligenceQuestions, scienceQuestions]
  );

  const currentCategory = categories[currentQuestionIndex];
  
  const currentQuestion = useMemo(() => {
    if (!currentCategory || currentCategory.questions.length === 0) return null;
    
    const availableIndices = currentCategory.questions
      .map((_, idx) => idx)
      .filter(idx => !usedQuestionIndices[currentQuestionIndex].includes(idx));
    
    if (availableIndices.length === 0) return null;
    
    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    return currentCategory.questions[randomIndex];
  }, [currentCategory, currentQuestionIndex, usedQuestionIndices]);

  const startGame = useCallback(() => {
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setGameOverReason(null);
    setUsedQuestionIndices([[], [], [], []]);
    setSelectedAnswer(null);
    setIsCorrect(null);
  }, []);

  const handleAnswer = useCallback(
    (selectedIndex: number) => {
      if (!currentQuestion || gameState !== 'playing' || selectedAnswer !== null) return;

      const correct = selectedIndex === Number(currentQuestion.correctAnswerIndex);
      
      setSelectedAnswer(selectedIndex);
      setIsCorrect(correct);

      // Play appropriate sound effect
      if (correct) {
        correctSoundRef.current?.play().catch(err => console.log('Sound play error:', err));
      } else {
        incorrectSoundRef.current?.play().catch(err => console.log('Sound play error:', err));
      }

      // Wait 1.5 seconds to show feedback before transitioning
      setTimeout(() => {
        if (!correct) {
          setGameState('gameOver');
          setGameOverReason({ type: 'wrongAnswer', questionIndex: currentQuestionIndex });
        } else {
          // Correct answer
          if (currentQuestionIndex === 3) {
            // Victory - completed all 4 questions
            setGameState('victory');
          } else {
            // Move to next question
            setCurrentQuestionIndex((prev) => prev + 1);
            setSelectedAnswer(null);
            setIsCorrect(null);
          }
        }
      }, 1500);
    },
    [currentQuestion, currentQuestionIndex, gameState, selectedAnswer]
  );

  const handleTimeout = useCallback(() => {
    if (gameState !== 'playing') return;
    setGameState('gameOver');
    setGameOverReason({ type: 'timeout', questionIndex: currentQuestionIndex });
  }, [currentQuestionIndex, gameState]);

  return {
    gameState,
    currentQuestionIndex,
    currentQuestion,
    currentCategory,
    categories,
    gameOverReason,
    isLoading,
    selectedAnswer,
    isCorrect,
    startGame,
    handleAnswer,
    handleTimeout,
  };
}
