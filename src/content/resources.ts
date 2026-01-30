export type ResourceType =
  | "Peer-reviewed"
  | "University"
  | "Research Institute"
  | "Magazine"
  | "Nonprofit"
  | "Government";

export type ResourceEntry = {
  title: string;
  publisher: string;
  url: string;
  type: ResourceType;
  credibilityNote: string;
  studentSummary: string;
};

export const resources: ResourceEntry[] = [
  {
    title: "Consumer Culture Theory",
    publisher: "Oxford Research Encyclopedia of Business and Management",
    url: "https://oxfordre.com/business/view/10.1093/acrefore/9780190224851.001.0001/acrefore-9780190224851-e-132",
    type: "University",
    credibilityNote:
      "Published by Oxford University Press with academic editorial standards.",
    studentSummary:
      "Explains how culture shapes the way people buy, use, and value goods."
  },
  {
    title: "Identity: The Basic Concepts",
    publisher: "Routledge",
    url: "https://www.routledge.com/Identity-The-Basic-Concepts/Coupland/p/book/9780415480068",
    type: "University",
    credibilityNote:
      "University publisher known for peer-reviewed academic books.",
    studentSummary:
      "Introduces how identity is formed and expressed in society."
  },
  {
    title: "Material Culture",
    publisher: "Smithsonian Institution",
    url: "https://www.si.edu/spotlight/material-culture",
    type: "Research Institute",
    credibilityNote:
      "Smithsonian resources are curated by subject-matter experts.",
    studentSummary:
      "Shows how objects and collections tell stories about people and communities."
  },
  {
    title: "Psychology of Possessions",
    publisher: "American Psychological Association",
    url: "https://www.apa.org/monitor/2018/06/cover-possessions",
    type: "Nonprofit",
    credibilityNote:
      "APA provides evidence-based reporting and expert review.",
    studentSummary:
      "Summarizes research on how belongings affect well-being and identity."
  },
  {
    title: "Consumer Culture",
    publisher: "British Library",
    url: "https://www.bl.uk/20th-century-literature/articles/consumer-culture",
    type: "Research Institute",
    credibilityNote:
      "National library offering expert-curated essays and sources.",
    studentSummary:
      "Explains how consumer culture developed over time and why it matters."
  },
  {
    title: "Media and Consumerism",
    publisher: "Common Sense Education",
    url: "https://www.commonsense.org/education/digital-citizenship/lesson/media-and-consumerism",
    type: "Nonprofit",
    credibilityNote:
      "Nonprofit education organization with editorial standards and citations.",
    studentSummary:
      "Helps students analyze how advertising shapes values and identity."
  },
  {
    title: "Why We Collect Things",
    publisher: "The New York Times",
    url: "https://www.nytimes.com/2018/10/23/health/collecting-collectors-psychology.html",
    type: "Magazine",
    credibilityNote:
      "Major news organization with editorial oversight and fact-checking.",
    studentSummary:
      "Discusses the psychology behind collecting and emotional attachment."
  },
  {
    title: "Young People, Social Media and Digital Identity",
    publisher: "Pew Research Center",
    url: "https://www.pewresearch.org/internet/2013/05/21/teens-social-media-and-privacy/",
    type: "Research Institute",
    credibilityNote:
      "Nonpartisan research organization known for rigorous survey methods.",
    studentSummary:
      "Provides data on how teens use digital spaces to express identity."
  }
];

export const credibilityLens = [
  "Look for institutional reputation (universities, research centers, major newsrooms).",
  "Check for peer review, editorial oversight, or expert authorship.",
  "Verify that sources cite evidence, data, or scholarly research.",
  "Consider bias: does the source explain methods and acknowledge limits?"
];
