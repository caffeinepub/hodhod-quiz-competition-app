import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Question } from '../types/quiz';
import { flagQuestions, sportsQuestions, intelligenceQuestions, scienceQuestions } from '../data/questions';

export function useGetFlagQuestions() {
  const { actor, isFetching } = useActor();

  return useQuery<Question[]>({
    queryKey: ['flagQuestions'],
    queryFn: async () => {
      // Since backend doesn't have the method yet, return local data
      return flagQuestions;
    },
    enabled: !isFetching,
  });
}

export function useGetSportsQuestions() {
  const { actor, isFetching } = useActor();

  return useQuery<Question[]>({
    queryKey: ['sportsQuestions'],
    queryFn: async () => {
      // Since backend doesn't have the method yet, return local data
      return sportsQuestions;
    },
    enabled: !isFetching,
  });
}

export function useGetIntelligenceQuestions() {
  const { actor, isFetching } = useActor();

  return useQuery<Question[]>({
    queryKey: ['intelligenceQuestions'],
    queryFn: async () => {
      // Since backend doesn't have the method yet, return local data
      return intelligenceQuestions;
    },
    enabled: !isFetching,
  });
}

export function useGetScienceQuestions() {
  const { actor, isFetching } = useActor();

  return useQuery<Question[]>({
    queryKey: ['scienceQuestions'],
    queryFn: async () => {
      // Since backend doesn't have the method yet, return local data
      return scienceQuestions;
    },
    enabled: !isFetching,
  });
}
