import { useState } from "react";
import { ArgumentMapEntry } from "../content/belk";
import Card from "./Card";

type ArgumentMapProps = {
  entries: ArgumentMapEntry[];
};

export default function ArgumentMap({ entries }: ArgumentMapProps) {
  const [activeId, setActiveId] = useState<string | null>(entries[0]?.id ?? null);

  const activeEntry = entries.find((entry) => entry.id === activeId);

  return (
    <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
      <Card className="space-y-2">
        <p className="text-sm font-semibold text-slate-700">Claims</p>
        <div className="space-y-2">
          {entries.map((entry) => (
            <button
              key={entry.id}
              type="button"
              onClick={() => setActiveId(entry.id)}
              className={`w-full rounded-xl border px-3 py-2 text-left text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                activeId === entry.id
                  ? "border-brand-400 bg-brand-50 text-brand-700"
                  : "border-slate-200 text-slate-600 hover:border-brand-200"
              }`}
            >
              {entry.claim}
            </button>
          ))}
        </div>
      </Card>
      <Card className="space-y-4">
        <p className="text-sm font-semibold text-slate-700">Evidence & reasoning</p>
        {activeEntry ? (
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                Evidence
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                {activeEntry.evidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                Reasoning
              </p>
              <p className="mt-2 text-sm text-slate-600">{activeEntry.reasoning}</p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-slate-500">Select a claim to explore.</p>
        )}
      </Card>
    </div>
  );
}
