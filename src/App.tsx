import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Concepts from "./pages/Concepts";
import Argument from "./pages/Argument";
import Vocabulary from "./pages/Vocabulary";
import Discussion from "./pages/Discussion";
import Resources from "./pages/Resources";
import Teacher from "./pages/Teacher";
import { keyConcepts, vocabulary } from "./content/belk";
import { resources } from "./content/resources";
import { SearchEntry } from "./components/SearchPanel";

const searchEntries: SearchEntry[] = [
  ...keyConcepts.map((concept) => ({
    id: `concept-${concept.id}`,
    title: concept.name,
    description: `${concept.definition} ${concept.whyItMatters}`,
    category: "Key Concept"
  })),
  ...vocabulary.map((term) => ({
    id: `vocab-${term.term}`,
    title: term.term,
    description: `${term.studentDefinition} ${term.exampleSentence}`,
    category: "Vocabulary"
  })),
  ...resources.map((resource) => ({
    id: `resource-${resource.url}`,
    title: resource.title,
    description: `${resource.studentSummary} ${resource.credibilityNote}`,
    category: "Resource"
  }))
];

export default function App() {
  return (
    <Layout searchEntries={searchEntries}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/concepts" element={<Concepts />} />
        <Route path="/argument" element={<Argument />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/discussion" element={<Discussion />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}
