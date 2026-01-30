import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Callout from "../components/Callout";
import Badge from "../components/Badge";
import { credibilityLens, resources } from "../content/resources";

export default function Resources() {
  return (
    <section className="space-y-8">
      <SectionHeader
        eyebrow="Resource library"
        title="Credible sources for deeper learning"
      />

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          {resources.map((resource) => (
            <Card key={resource.url} className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{resource.type}</Badge>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {resource.publisher}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  <a href={resource.url} target="_blank" rel="noreferrer">
                    {resource.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.studentSummary}
                </p>
              </div>
              <p className="text-xs text-slate-500">{resource.credibilityNote}</p>
            </Card>
          ))}
        </div>
        <Callout title="Credibility lens">
          <ul className="list-disc space-y-2 pl-5">
            {credibilityLens.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Callout>
      </div>
    </section>
  );
}
