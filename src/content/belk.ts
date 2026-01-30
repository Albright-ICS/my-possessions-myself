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
    "Belk explains how possessions are woven into our identities, not just as status symbols but as meaningful objects, places, relationships, and memories. He uses research findings and examples to show that belongings can strengthen self-understanding and community ties, while also creating risks when attachment becomes excessive.",
  audience: "Grade 9–10 students exploring identity, consumer culture, and sociology.",
  bigIdea:
    "People shape their identities through what they possess, and those attachments can both support and complicate how we see ourselves.",
  notice:
    "This site summarizes and teaches from the article; it does not reproduce the full text."
};

export const keyConcepts: KeyConcept[] = [
  {
    id: "extended-self",
    name: "Extended Self",
    definition:
      "The idea that our sense of self stretches beyond our bodies to include possessions, places, and people we feel connected to.",
    examples: [
      "A favorite hoodie feels like part of who you are, not just something you own.",
      "A family home represents shared identity for everyone who lives there."
    ],
    whyItMatters:
      "It helps explain why losing or gaining possessions can feel like a change in identity."
  },
  {
    id: "possession-meaning",
    name: "Meaning of Possessions",
    definition:
      "Objects gain meaning through memories, relationships, and social signals, not just price or usefulness.",
    examples: [
      "A gift from a grandparent carries emotional value beyond its cost.",
      "A varsity jacket signals membership in a team and a sense of pride."
    ],
    whyItMatters:
      "Understanding meaning helps students see why people care deeply about certain objects."
  },
  {
    id: "categories-of-self",
    name: "Four Categories of Self-Possessions",
    definition:
      "Belk groups the extended self into body parts, objects, places/time periods, and people/pets.",
    examples: [
      "Body parts: hands or eyes feel like \"me\" rather than \"mine.\"",
      "Places: a childhood neighborhood feels central to identity."
    ],
    whyItMatters:
      "These categories help organize what counts as identity and why it varies by person."
  },
  {
    id: "loss-and-self",
    name: "Loss, Damage, and the Self",
    definition:
      "When possessions are lost or violated, people can feel a deep sense of personal loss.",
    examples: [
      "Burglary victims often describe feeling personally violated because their belongings felt like part of them.",
      "Disasters or moving into care facilities can feel like losing parts of identity."
    ],
    whyItMatters:
      "It shows how attachments can be protective and painful at the same time."
  },
  {
    id: "advantages-risks",
    name: "Benefits and Risks of Attachment",
    definition:
      "Possessions can offer continuity and self-esteem, but too much attachment can harm relationships and growth.",
    examples: [
      "Heirlooms connect families to the past.",
      "Over-identifying with possessions can crowd out people or personal development."
    ],
    whyItMatters:
      "Students can evaluate when possessions help identity and when they limit it."
  }
];

export const argumentMap: ArgumentMapEntry[] = [
  {
    id: "claim-1",
    claim: "Possessions are part of the self, not just things we own.",
    evidence: [
      "Belk notes that jewelry, weapons, and utensils were buried with people, showing long-standing links between identity and objects.",
      "Studies show people classify items like homes, cars, and favorite clothing as highly central to identity."
    ],
    reasoning:
      "If objects are treated as inseparable from a person in life and death, they function as extensions of identity."
  },
  {
    id: "claim-2",
    claim: "The extended self includes objects, places, time periods, and people.",
    evidence: [
      "Belk’s card-sorting study asked people to rank body parts, objects, places, and people as more or less central to the self.",
      "Participants often named childhood, hometowns, family members, and pets as identity-defining."
    ],
    reasoning:
      "By organizing the self into categories, the article shows identity is built from multiple kinds of attachments."
  },
  {
    id: "claim-3",
    claim: "Attachment has both benefits and risks.",
    evidence: [
      "Possessions can preserve a sense of the past and help children build self-esteem.",
      "Excessive attachment can lead to jealousy, possessiveness, or living through others."
    ],
    reasoning:
      "The article argues that identity through possessions can be healthy, but it becomes harmful if it replaces relationships or growth."
  }
];

export const vocabulary: VocabularyTerm[] = [
  {
    term: "Self-concept",
    studentDefinition: "The way a person understands and describes who they are.",
    exampleSentence: "Her self-concept includes being a musician and a supportive friend."
  },
  {
    term: "Extended self",
    studentDefinition:
      "The idea that identity stretches beyond the body to include possessions and relationships.",
    exampleSentence: "He treats his skateboard as part of his extended self."
  },
  {
    term: "Symbolic value",
    studentDefinition: "The meaning an object carries beyond its practical use.",
    exampleSentence: "The ring’s symbolic value matters more than its price."
  },
  {
    term: "Heirloom",
    studentDefinition: "A valued object passed down through generations.",
    exampleSentence: "The quilt is a family heirloom that links them to their history."
  },
  {
    term: "Attachment",
    studentDefinition: "A strong emotional bond with a person, place, or object.",
    exampleSentence: "Her attachment to the old house made moving difficult."
  },
  {
    term: "Aggregate identity",
    studentDefinition:
      "A shared identity that belongs to a group, community, or nation.",
    exampleSentence: "Monuments can strengthen aggregate identity by honoring shared history."
  }
];

export const discussionQuestions: DiscussionQuestion[] = [
  {
    id: "dq-1",
    type: "Socratic",
    question:
      "Which possession, place, or relationship best represents who you are right now? Why?"
  },
  {
    id: "dq-2",
    type: "Socratic",
    question:
      "Belk says identity can be individual and collective. What is one example of aggregate identity in your community?"
  },
  {
    id: "dq-3",
    type: "Quick Check",
    question:
      "Name the four categories of possessions Belk says can be part of the extended self."
  },
  {
    id: "dq-4",
    type: "Quick Check",
    question:
      "Why might a burglary feel like a personal violation, not just a property loss?"
  },
  {
    id: "dq-5",
    type: "Extension",
    question:
      "How do digital spaces or social media profiles function like possessions today?"
  }
];

export const exitTickets: ExitTicket[] = [
  {
    id: "exit-1",
    prompt: "One claim from the article I can explain is..."
  },
  {
    id: "exit-2",
    prompt: "A concept that changed how I think about identity is..."
  },
  {
    id: "exit-3",
    prompt: "One example of the extended self I see in daily life is..."
  }
];

export const guidedReadingSteps = {
  mainIdea:
    "Belk argues that possessions are part of our identity, shaping how we see ourselves and how others see us.",
  conceptFocus:
    "Focus on the extended self: how objects, places, and people can feel like \"me.\"",
  discussionQuestion:
    "Where do you see the extended self in the article’s examples of homes, cars, or heirlooms?",
  quickWrite:
    "Describe one possession or place that feels like part of your identity and explain why."
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
