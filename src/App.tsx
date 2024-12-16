import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { loadFakeStudySet } from './utils/loadData';
import { StudySetCollection } from './model/StudySetCollection';
import { StudySet } from './model/StudySet';

function App() {
  const [count, setCount] = useState(0);
  const [studySets, setStudySets] = useState<StudySet[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await loadFakeStudySet();
        console.log(`data ${JSON.stringify(data)}`);

        setStudySets(data.studySets);
        setIsLoading(false);
      } catch (err) {
        // Explicitly type the error
        const errorMessage = err instanceof Error ? err.message : String(err);
        setError(errorMessage);
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return <div>Loading study set data...</div>;
  }

  if (error) {
    return <div>{`Failed to load study set data due to ${error}`}</div>;
  }

  return <>{}</>;
}

export default App;
