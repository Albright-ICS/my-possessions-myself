import { ReactNode } from "react";

type SectionHeaderProps = {
  title: string;
  eyebrow?: string;
  children?: ReactNode;
};

export default function SectionHeader({ title, eyebrow, children }: SectionHeaderProps) {
  return (
    <div className="mb-6 space-y-2">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-slate-900">{title}</h2>
      {children ? <p className="text-base text-slate-600">{children}</p> : null}
    </div>
  );
}
