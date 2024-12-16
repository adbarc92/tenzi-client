import { StudySetCollection } from '../model/StudySetCollection';
import { mockStudySets } from './mockStudySetData';

export const loadFakeStudySet = async (
  simulatedTimeout: number = 1000,
): Promise<StudySetCollection> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockStudySets);
    }, simulatedTimeout);
  });
};
