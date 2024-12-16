import { StudySetCollection } from '../model/StudySetCollection';

export const mockStudySets: StudySetCollection = {
  studySets: [
    {
      id: 'studySet1',
      name: 'Test Guide',
      terms: [
        {
          id: 'term1',
          name: 'Term1',
          definitions: [
            {
              id: 'definition1',
              name: 'Definition 1',
              category: {
                id: '1',
                name: 'Test Category 1',
              },
            },
            {
              id: 'definition2',
              name: 'Definition 2',
              category: {
                id: '1',
                name: 'Test Category 1',
              },
            },
            {
              id: 'definition3',
              name: 'Definition 3',
              category: {
                id: '2',
                name: 'Category 2',
              },
            },
          ],
        },
        {
          id: 'term2',
          name: 'Term2',
          definitions: [
            {
              id: 'definition4',
              name: 'Definition 4',
              category: {
                id: '1',
                name: '2',
              },
            },
          ],
        },
        {
          id: 'term3',
          name: 'Term3',
          definitions: [],
        },
      ],
      categories: [],
    },
    {
      id: 'studySet2',
      name: 'Test Guide 2',
      terms: [],
      categories: [],
    },
  ],
};
