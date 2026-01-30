import { ReactNode } from "react";

type CalloutProps = {
  title: string;
  children: ReactNode;
};

export default function Callout({ title, children }: CalloutProps) {
  return (
    <div className="rounded-2xl border border-brand-200 bg-brand-50 p-5 text-sm text-slate-700">
      <p className="mb-2 text-base font-semibold text-brand-700">{title}</p>
      {children}
    </div>
  );
}
