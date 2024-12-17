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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './components/ui/carousel';

function App() {
  const [studySets, setStudySets] = useState<StudySet[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [studySetToEdit, setStudySetToEdit] = useState<StudySet | null>(null);

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
      {studySetToEdit ? (
        <div>
          <Button onClick={() => setStudySetToEdit(null)}>Back</Button>
          <p>Let's pretend you're editing a study set</p>
        </div>
      ) : (
        StudyGuideCarousel()
      )}
    </>
  );

  function StudyGuideCarousel() {
    return (
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {studySets.map((studySet, index) => (
            <CarouselItem key={index}>
              <div className="p-1">{StudyGuideCard(studySet)}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }

  function StudyGuideCard(studySet: StudySet) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{studySet.name}</CardTitle>
          <CardDescription>
            This is a description of the study guide
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() =>
              console.log(`This will start a quiz for ${studySet.name}`)
            }
            variant="default"
          >
            Quiz
          </Button>
          <Button
            onClick={() => setStudySetToEdit(studySet)}
            variant="secondary"
          >
            Edit
          </Button>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    );
  }
}

export default App;
