import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Badge from "../components/Badge";
import { discussionQuestions, exitTickets } from "../content/belk";

const protocols = [
  {
    name: "Think–Pair–Share",
    steps: [
      "Think silently about the prompt for 2 minutes.",
      "Pair up and share your idea using evidence from the article.",
      "Share with the class; listen for patterns or differences."
    ]
  },
  {
    name: "Fishbowl",
    steps: [
      "Inner circle discusses a question while outer circle listens.",
      "Outer circle records evidence and follow-up questions.",
      "Switch roles and summarize key insights."
    ]
  },
  {
    name: "Socratic Seminar",
    steps: [
      "Prepare questions tied to the article's key claims.",
      "Use evidence to build on or challenge peers' ideas.",
      "End by summarizing the strongest evidence-based conclusions."
    ]
  },
  {
    name: "Quick Debate",
    steps: [
      "Split into two sides for a specific claim from the article.",
      "Each side builds a claim, evidence, reasoning statement.",
      "Class votes on which reasoning was strongest."
    ]
  }
];

const writingPrompts = [
  {
    title: "CER Analytical Paragraph",
    description:
      "Write a paragraph that states a claim about how possessions shape identity, supports it with evidence from the article, and explains the reasoning."
  },
  {
    title: "Reflective Piece",
    description:
      "Write a short reflection connecting a personal possession or space to your sense of self. Include at least one concept from the article."
  }
];

export default function Discussion() {
  return (
    <section className="space-y-8">
      <SectionHeader
        eyebrow="Discussion & writing"
        title="Practice speaking and writing about the text"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="space-y-4">
          <p className="text-sm font-semibold text-slate-700">Discussion protocols</p>
          <div className="space-y-3">
            {protocols.map((protocol) => (
              <div key={protocol.name} className="rounded-xl border border-slate-200 p-4">
                <p className="font-semibold text-slate-800">{protocol.name}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  {protocol.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-4">
          <p className="text-sm font-semibold text-slate-700">Writing tasks</p>
          <div className="space-y-3">
            {writingPrompts.map((prompt) => (
              <div key={prompt.title} className="rounded-xl border border-slate-200 p-4">
                <p className="font-semibold text-slate-800">{prompt.title}</p>
                <p className="mt-2 text-sm text-slate-600">{prompt.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="space-y-4">
          <p className="text-sm font-semibold text-slate-700">Discussion questions</p>
          <ul className="space-y-3">
            {discussionQuestions.map((question) => (
              <li key={question.id} className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-center gap-2">
                  <Badge>{question.type}</Badge>
                  <p className="text-sm font-semibold text-slate-700">Prompt</p>
                </div>
                <p className="mt-2 text-sm text-slate-600">{question.question}</p>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="space-y-3">
          <p className="text-sm font-semibold text-slate-700">Exit tickets</p>
          <ul className="space-y-2 text-sm text-slate-600">
            {exitTickets.map((ticket) => (
              <li key={ticket.id} className="rounded-xl border border-slate-200 p-3">
                {ticket.prompt}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
