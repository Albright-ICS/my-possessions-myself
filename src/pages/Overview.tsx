import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Callout from "../components/Callout";
import GuidedReading from "../components/GuidedReading";
import { articleMeta, guidedReadingSteps } from "../content/belk";

const keyMoves = [
  "Explains the idea of the extended self and why possessions feel personal.",
  "Uses research to categorize body parts, objects, places, and people as identity links.",
  "Shows how specific examples (homes, cars, heirlooms, pets) carry symbolic meaning.",
  "Weighs benefits of attachment against risks like possessiveness or lost growth."
  "Introduces how possessions can become part of identity.",
  "Explores cultural and social forces that shape meaning.",
  "Analyzes what happens when possessions are lost or replaced.",
  "Connects the ideas to rituals, collecting, and change over time."
];

export default function Overview() {
  return (
    <section className="space-y-8">
      <SectionHeader
        eyebrow="Article overview"
        title="Thesis, key moves, and argument flow"
      >
        Use this page to summarize the article after you read it.
      </SectionHeader>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="space-y-4">
          <div>
            <p className="text-sm font-semibold text-slate-700">Thesis</p>
            <p className="mt-2 text-slate-600">{articleMeta.bigIdea}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-700">Key moves</p>
            <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-slate-600">
              {keyMoves.map((move) => (
                <li key={move}>{move}</li>
              ))}
            </ol>
          </div>
          <Callout title="Argument flow snapshot">
            <p>
              TODO_FROM_PDF: Summarize how the article moves from claim to evidence
              to implication in 3–4 sentences.
            </p>
          </Callout>
        </Card>
        <GuidedReading content={guidedReadingSteps} />
      </div>
    </section>
  );
}
