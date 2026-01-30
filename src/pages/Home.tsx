import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Callout from "../components/Callout";
import ProgressTracker from "../components/ProgressTracker";
import { articleMeta, norms, sectionChecklist } from "../content/belk";

export default function Home() {
  return (
    <section className="space-y-8">
      <SectionHeader
        eyebrow="Welcome"
        title="How to use this learning hub"
      >
        A student-friendly guide to understanding identity, possessions, and culture.
      </SectionHeader>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="space-y-4">
          <div>
            <p className="text-sm font-semibold text-slate-700">Purpose</p>
            <p className="mt-2 text-slate-600">
              {articleMeta.summary}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-700">How to use it</p>
            <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-slate-600">
              <li>Start with the overview to understand the thesis.</li>
              <li>Use key concepts and vocabulary to build academic language.</li>
              <li>Practice with discussion and writing tasks.</li>
              <li>Explore the resource library for evidence and context.</li>
            </ol>
          </div>
          <Callout title="Classroom norms">
            <ul className="list-disc space-y-1 pl-5">
              {norms.map((norm) => (
                <li key={norm}>{norm}</li>
              ))}
            </ul>
          </Callout>
        </Card>
        <ProgressTracker items={sectionChecklist} />
      </div>
    </section>
  );
}
