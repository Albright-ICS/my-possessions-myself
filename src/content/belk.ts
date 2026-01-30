export type ArticleMeta = {
  title: string;
  author: string;
  publicationYear: string;
  summary: string;
  audience: string;
  bigIdea: string;
  notice: string;
};

export type KeyConcept = {
  id: string;
  name: string;
  definition: string;
  examples: string[];
  whyItMatters: string;
};

export type ArgumentMapEntry = {
  id: string;
  claim: string;
  evidence: string[];
  reasoning: string;
};

export type VocabularyTerm = {
  term: string;
  studentDefinition: string;
  exampleSentence: string;
};

export type DiscussionQuestion = {
  id: string;
  type: "Socratic" | "Quick Check" | "Extension";
  question: string;
};

export type ExitTicket = {
  id: string;
  prompt: string;
};

export const articleMeta: ArticleMeta = {
  title: "My Possessions, Myself",
  author: "Russell W. Belk",
  publicationYear: "1988",
  summary:
    "TODO_FROM_PDF: Replace with a 2–3 sentence summary of the article's main argument.",
  audience: "Grade 9–10 students exploring identity, consumer culture, and sociology.",
  bigIdea:
    "TODO_FROM_PDF: Replace with the article's core idea in one clear sentence.",
  notice:
    "This site summarizes and teaches from the article; it does not reproduce the full text."
};

export const keyConcepts: KeyConcept[] = [
  {
    id: "extended-self",
    name: "Extended Self",
    definition: "TODO_FROM_PDF: Define the concept in student-friendly language.",
    examples: [
      "TODO_FROM_PDF: Example of a personal object as part of identity.",
      "TODO_FROM_PDF: Example of how spaces/places feel like part of self."
    ],
    whyItMatters:
      "TODO_FROM_PDF: Explain how this concept helps explain identity and consumption."
  },
  {
    id: "possession-meaning",
    name: "Meaning of Possessions",
    definition: "TODO_FROM_PDF: Define how objects gain symbolic meaning.",
    examples: [
      "TODO_FROM_PDF: Example of a gift with emotional value.",
      "TODO_FROM_PDF: Example of a status symbol."
    ],
    whyItMatters:
      "TODO_FROM_PDF: Connect meaning-making to self-concept and social signals."
  },
  {
    id: "loss-and-self",
    name: "Loss, Damage, and the Self",
    definition: "TODO_FROM_PDF: Define how loss of possessions affects identity.",
    examples: [
      "TODO_FROM_PDF: Example of loss or theft and its emotional impact.",
      "TODO_FROM_PDF: Example of repair or replacement."
    ],
    whyItMatters:
      "TODO_FROM_PDF: Explain why loss reveals attachment and identity links."
  },
  {
    id: "collecting",
    name: "Collecting and Control",
    definition: "TODO_FROM_PDF: Define how collecting relates to self-expression.",
    examples: [
      "TODO_FROM_PDF: Example of a curated collection.",
      "TODO_FROM_PDF: Example of controlling or organizing possessions."
    ],
    whyItMatters:
      "TODO_FROM_PDF: Explain the role of collecting in shaping identity."
  }
];

export const argumentMap: ArgumentMapEntry[] = [
  {
    id: "claim-1",
    claim: "TODO_FROM_PDF: Main claim about possessions and identity.",
    evidence: [
      "TODO_FROM_PDF: Evidence from theory or research.",
      "TODO_FROM_PDF: Example or case from the article."
    ],
    reasoning: "TODO_FROM_PDF: Explain how the evidence supports the claim."
  },
  {
    id: "claim-2",
    claim: "TODO_FROM_PDF: Claim about cultural or social dimensions.",
    evidence: [
      "TODO_FROM_PDF: Evidence about social roles or groups.",
      "TODO_FROM_PDF: Evidence about rituals or habits."
    ],
    reasoning: "TODO_FROM_PDF: Reasoning that connects the evidence to the claim."
  },
  {
    id: "claim-3",
    claim: "TODO_FROM_PDF: Claim about loss, replacement, or change over time.",
    evidence: [
      "TODO_FROM_PDF: Evidence about transitions or life stages.",
      "TODO_FROM_PDF: Evidence about emotional responses."
    ],
    reasoning: "TODO_FROM_PDF: Explain why this strengthens the overall argument."
  }
];

export const vocabulary: VocabularyTerm[] = [
  {
    term: "Self-concept",
    studentDefinition: "TODO_FROM_PDF: Student-friendly definition.",
    exampleSentence: "TODO_FROM_PDF: Example sentence using the term."
  },
  {
    term: "Symbolic value",
    studentDefinition: "TODO_FROM_PDF: Student-friendly definition.",
    exampleSentence: "TODO_FROM_PDF: Example sentence using the term."
  },
  {
    term: "Identity signaling",
    studentDefinition: "TODO_FROM_PDF: Student-friendly definition.",
    exampleSentence: "TODO_FROM_PDF: Example sentence using the term."
  },
  {
    term: "Attachment",
    studentDefinition: "TODO_FROM_PDF: Student-friendly definition.",
    exampleSentence: "TODO_FROM_PDF: Example sentence using the term."
  },
  {
    term: "Ritual",
    studentDefinition: "TODO_FROM_PDF: Student-friendly definition.",
    exampleSentence: "TODO_FROM_PDF: Example sentence using the term."
  },
  {
    term: "Collecting",
    studentDefinition: "TODO_FROM_PDF: Student-friendly definition.",
    exampleSentence: "TODO_FROM_PDF: Example sentence using the term."
  }
];

export const discussionQuestions: DiscussionQuestion[] = [
  {
    id: "dq-1",
    type: "Socratic",
    question: "TODO_FROM_PDF: Which possession best represents who you are, and why?"
  },
  {
    id: "dq-2",
    type: "Socratic",
    question:
      "TODO_FROM_PDF: How does culture shape which objects we value most?"
  },
  {
    id: "dq-3",
    type: "Quick Check",
    question:
      "TODO_FROM_PDF: Identify one example of the extended self from the article."
  },
  {
    id: "dq-4",
    type: "Quick Check",
    question:
      "TODO_FROM_PDF: What happens to our sense of self when possessions are lost?"
  },
  {
    id: "dq-5",
    type: "Extension",
    question:
      "TODO_FROM_PDF: How might social media profiles function as possessions today?"
  }
];

export const exitTickets: ExitTicket[] = [
  {
    id: "exit-1",
    prompt: "TODO_FROM_PDF: One claim I can explain clearly is..."
  },
  {
    id: "exit-2",
    prompt: "TODO_FROM_PDF: A concept I want to investigate further is..."
  },
  {
    id: "exit-3",
    prompt: "TODO_FROM_PDF: One real-life example of the extended self is..."
  }
];

export const guidedReadingSteps = {
  mainIdea: "TODO_FROM_PDF: 1–2 sentence main idea from the article.",
  conceptFocus: "TODO_FROM_PDF: Focus concept for guided reading (ex: extended self).",
  discussionQuestion:
    "TODO_FROM_PDF: Discussion question that links to the concept.",
  quickWrite:
    "TODO_FROM_PDF: Short writing prompt connecting personal experience to the article."
};

export const norms = [
  "Be curious and respectful when classmates share personal examples.",
  "Use evidence from the article or your experience to support claims.",
  "Listen fully before responding; ask follow-up questions.",
  "Connect ideas to real-world examples beyond shopping or brands."
];

export const sectionChecklist = [
  { id: "home", label: "Home & norms" },
  { id: "overview", label: "Article overview" },
  { id: "concepts", label: "Key concepts" },
  { id: "argument", label: "Argument map" },
  { id: "vocabulary", label: "Vocabulary studio" },
  { id: "discussion", label: "Discussion & writing" },
  { id: "resources", label: "Resource library" },
  { id: "teacher", label: "Teacher page" }
];
