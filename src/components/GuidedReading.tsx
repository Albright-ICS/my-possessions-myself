import { useState } from "react";
import Button from "./Button";
import Card from "./Card";

export type GuidedReadingContent = {
  mainIdea: string;
  conceptFocus: string;
  discussionQuestion: string;
  quickWrite: string;
};

const steps = [
  "Main idea",
  "Concept focus",
  "Discussion question",
  "Quick write",
];

type GuidedReadingProps = {
  content: GuidedReadingContent;
};

export default function GuidedReading({ content }: GuidedReadingProps) {
  const [stepIndex, setStepIndex] = useState(0);

  const stepContent = [
    content.mainIdea,
    content.conceptFocus,
    content.discussionQuestion,
    content.quickWrite,
  ][stepIndex];

  return (
    <Card className="space-y-4">
      <div>
        <p className="text-sm font-semibold text-slate-700">Guided reading mode</p>
        <p className="text-xs text-slate-500">
          Move through each step to build understanding.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {steps.map((step, index) => (
          <button
            key={step}
            type="button"
            onClick={() => setStepIndex(index)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
              index === stepIndex
                ? "bg-brand-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {index + 1}. {step}
          </button>
        ))}
      </div>
      <p className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
        {stepContent}
      </p>
      <div className="flex justify-between">
        <Button
          variant="secondary"
          onClick={() => setStepIndex((prev) => Math.max(prev - 1, 0))}
          disabled={stepIndex === 0}
        >
          Back
        </Button>
        <Button
          onClick={() =>
            setStepIndex((prev) => Math.min(prev + 1, steps.length - 1))
          }
          disabled={stepIndex === steps.length - 1}
        >
          Next
        </Button>
      </div>
    </Card>
  );
}
