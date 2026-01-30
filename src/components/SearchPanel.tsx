import { ChangeEvent, useMemo, useState } from "react";
import Card from "./Card";

export type SearchEntry = {
  id: string;
  title: string;
  description: string;
  category: string;
};

type SearchPanelProps = {
  entries: SearchEntry[];
};

export default function SearchPanel({ entries }: SearchPanelProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      return [];
    }
    return entries.filter((entry) => {
      const haystack = `${entry.title} ${entry.description} ${entry.category}`.toLowerCase();
      return haystack.includes(trimmed);
    });
  }, [entries, query]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <Card className="space-y-3">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-700">Global search</p>
          <p className="text-xs text-slate-500">
            Search key concepts, vocabulary, and resources.
          </p>
        </div>
        <div className="w-full md:w-72">
          <label className="sr-only" htmlFor="global-search">
            Search the learning hub
          </label>
          <input
            id="global-search"
            type="search"
            value={query}
            onChange={handleChange}
            placeholder="Search concepts, terms, resources"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          />
        </div>
      </div>
      {query.trim() ? (
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {results.length} result{results.length === 1 ? "" : "s"}
          </p>
          <ul className="grid gap-3 md:grid-cols-2">
            {results.map((result) => (
              <li key={result.id} className="rounded-xl border border-slate-200 p-3">
                <p className="text-sm font-semibold text-slate-800">{result.title}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  {result.category}
                </p>
                <p className="mt-1 text-sm text-slate-600">{result.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-sm text-slate-500">
          Start typing to find a concept, vocabulary term, or resource.
        </p>
      )}
    </Card>
  );
}
