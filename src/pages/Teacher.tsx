import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Callout from "../components/Callout";

const facilitationTips = [
  "Preview sensitive topics: identity, loss, and consumerism can be personal.",
  "Invite students to use real or imagined examples to protect privacy.",
  "Model citing evidence and connecting it to the claim.",
  "Use the guided reading mode for structured annotation."
];

const standardsAlignment = [
  "CCSS.ELA-LITERACY.RI.9-10.1: Cite strong and thorough evidence.",
  "CCSS.ELA-LITERACY.RI.9-10.2: Determine central ideas and summarize.",
  "CCSS.ELA-LITERACY.W.9-10.1: Write arguments with evidence.",
  "CCSS.ELA-LITERACY.SL.9-10.1: Participate in collaborative discussions."
];

const differentiationMoves = [
  "Provide sentence starters for claims, evidence, and reasoning.",
  "Allow audio or visual examples for students with language needs.",
  "Offer optional challenge questions about digital identity.",
  "Use the vocabulary flashcards for repeated practice."
];

export default function Teacher() {
  return (
    <section className="space-y-8">
      <SectionHeader
        eyebrow="Teacher page"
        title="Facilitation tips and alignment"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="space-y-3">
          <p className="text-sm font-semibold text-slate-700">Facilitation tips</p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
            {facilitationTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </Card>
        <Card className="space-y-3">
          <p className="text-sm font-semibold text-slate-700">Standards alignment</p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
            {standardsAlignment.map((standard) => (
              <li key={standard}>{standard}</li>
            ))}
          </ul>
        </Card>
      </div>

      <Callout title="Differentiation moves">
        <ul className="list-disc space-y-2 pl-5">
          {differentiationMoves.map((move) => (
            <li key={move}>{move}</li>
          ))}
        </ul>
      </Callout>
    </section>
  );
}
