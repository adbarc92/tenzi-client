import { useEffect, useState } from 'react';
import './App.css';
import { loadFakeStudySet } from './utils/loadData';
import { StudySet } from './model/StudySet';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card';
import { Button } from './components/ui/button';

function App() {
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

  return (
    <>
      {studySets.map((studySet) => (
        <Card>
          <CardHeader>
            <CardTitle>{studySet.name}</CardTitle>
            {/* <CardDescription>
              This is a description of the study guide
            </CardDescription> */}
          </CardHeader>
          <CardContent>
            <p>This is the main content.</p>
          </CardContent>
          <CardFooter>
            <Button variant="default">Quiz</Button>
            <Button variant="secondary">Edit</Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}

export default App;
