import SectionHeader from "../components/SectionHeader";
import ArgumentMap from "../components/ArgumentMap";
import { argumentMap } from "../content/belk";

export default function Argument() {
  return (
    <section className="space-y-8">
      <SectionHeader eyebrow="Argument map" title="Follow the logic" />
      <ArgumentMap entries={argumentMap} />
    </section>
  );
}
