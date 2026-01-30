import { useState } from "react";

export type FlashcardProps = {
  term: string;
  definition: string;
  example: string;
};

export default function Flashcard({ term, definition, example }: FlashcardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((prev) => !prev)}
      className="flex h-44 w-full flex-col justify-center rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-brand-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
    >
      {flipped ? (
        <div>
          <p className="text-sm font-semibold text-brand-600">Definition</p>
          <p className="mt-2 text-sm text-slate-700">{definition}</p>
          <p className="mt-3 text-xs text-slate-500">Example: {example}</p>
        </div>
      ) : (
        <div>
          <p className="text-sm font-semibold text-brand-600">Term</p>
          <p className="mt-4 text-2xl font-semibold text-slate-800">{term}</p>
          <p className="mt-2 text-xs text-slate-500">Click to flip</p>
        </div>
      )}
    </button>
  );
}
