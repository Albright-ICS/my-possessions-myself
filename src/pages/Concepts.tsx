import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import { keyConcepts } from "../content/belk";

export default function Concepts() {
  return (
    <section className="space-y-8">
      <SectionHeader eyebrow="Key concepts" title="Build understanding" />
      <div className="grid gap-4 md:grid-cols-2">
        {keyConcepts.map((concept) => (
          <Card key={concept.id} className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-slate-800">{concept.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{concept.definition}</p>
            </div>
            <details className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              <summary className="cursor-pointer font-semibold text-slate-700">
                Examples and why it matters
              </summary>
              <div className="mt-3 space-y-3">
                <ul className="list-disc space-y-1 pl-5">
                  {concept.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
                <p className="text-sm text-slate-600">{concept.whyItMatters}</p>
              </div>
            </details>
          </Card>
        ))}
      </div>
    </section>
  );
}
