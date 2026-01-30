import { useMemo, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Button from "../components/Button";
import Flashcard from "../components/Flashcard";
import { vocabulary } from "../content/belk";

const shuffleArray = <T,>(array: T[]) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export default function Vocabulary() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const quizItems = useMemo(() => shuffleArray(vocabulary), []);
  const currentItem = quizItems[quizIndex];

  const options = useMemo(() => {
    if (!currentItem) {
      return [];
    }
    const otherDefinitions = vocabulary
      .filter((item) => item.term !== currentItem.term)
      .map((item) => item.studentDefinition);
    const selection = shuffleArray(otherDefinitions).slice(0, 3);
    return shuffleArray([currentItem.studentDefinition, ...selection]);
  }, [currentItem]);

  const handleNext = () => {
    setShowAnswer(false);
    setQuizIndex((prev) => (prev + 1) % quizItems.length);
  };

  return (
    <section className="space-y-8">
      <SectionHeader
        eyebrow="Vocabulary studio"
        title="Flashcards and quick self-check"
      >
        Click a card to flip it. Use the quiz to check your understanding.
      </SectionHeader>

      <div className="grid gap-4 md:grid-cols-2">
        {vocabulary.map((term) => (
          <Flashcard
            key={term.term}
            term={term.term}
            definition={term.studentDefinition}
            example={term.exampleSentence}
          />
        ))}
      </div>

      <Card className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-slate-700">Quick self-check</p>
          <p className="text-xs text-slate-500">
            Pick the best definition. Reveal the answer, then move on.
          </p>
        </div>
        {currentItem ? (
          <div className="space-y-3">
            <p className="text-lg font-semibold text-slate-800">
              {currentItem.term}
            </p>
            <div className="grid gap-2 md:grid-cols-2">
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setShowAnswer(true)}
                  className="rounded-xl border border-slate-200 px-3 py-2 text-left text-sm text-slate-600 transition hover:border-brand-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                >
                  {option}
                </button>
              ))}
            </div>
            {showAnswer ? (
              <div className="rounded-xl border border-brand-200 bg-brand-50 p-3 text-sm text-brand-700">
                Correct answer: {currentItem.studentDefinition}
              </div>
            ) : null}
            <Button onClick={handleNext} className="mt-2">
              Next term
            </Button>
          </div>
        ) : (
          <p className="text-sm text-slate-500">No vocabulary available yet.</p>
        )}
      </Card>
    </section>
  );
}
