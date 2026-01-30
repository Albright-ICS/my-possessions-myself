import { useEffect, useState } from "react";
import Card from "./Card";

export type ProgressItem = {
  id: string;
  label: string;
};

type ProgressTrackerProps = {
  items: ProgressItem[];
};

const storageKey = "belk-progress";

export default function ProgressTracker({ items }: ProgressTrackerProps) {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Record<string, boolean>;
        setCompleted(parsed);
      } catch {
        setCompleted({});
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(completed));
  }, [completed]);

  const toggleItem = (id: string) => {
    setCompleted((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = items.filter((item) => completed[item.id]).length;

  return (
    <Card className="space-y-4">
      <div>
        <p className="text-sm font-semibold text-slate-700">Progress tracker</p>
        <p className="text-xs text-slate-500">
          {completedCount} of {items.length} sections complete
        </p>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-3">
            <input
              id={`progress-${item.id}`}
              type="checkbox"
              checked={Boolean(completed[item.id])}
              onChange={() => toggleItem(item.id)}
              className="h-4 w-4 rounded border-slate-300 text-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
            />
            <label
              htmlFor={`progress-${item.id}`}
              className="text-sm text-slate-700"
            >
              {item.label}
            </label>
          </li>
        ))}
      </ul>
    </Card>
  );
}
