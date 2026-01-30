import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import SearchPanel, { SearchEntry } from "./SearchPanel";
import { articleMeta } from "../content/belk";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/overview", label: "Article Overview" },
  { to: "/concepts", label: "Key Concepts" },
  { to: "/argument", label: "Argument Map" },
  { to: "/vocabulary", label: "Vocabulary Studio" },
  { to: "/discussion", label: "Discussion & Writing" },
  { to: "/resources", label: "Resource Library" },
  { to: "/teacher", label: "Teacher Page" }
];

type LayoutProps = {
  children: ReactNode;
  searchEntries: SearchEntry[];
};

export default function Layout({ children, searchEntries }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              Learning Hub
            </p>
            <h1 className="text-2xl font-semibold text-slate-900">
              {articleMeta.title}
            </h1>
            <p className="text-sm text-slate-500">{articleMeta.author}</p>
          </div>
          <nav className="flex flex-wrap gap-2 text-sm font-semibold text-slate-600">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-3 py-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                    isActive
                      ? "bg-brand-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-6">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            {articleMeta.notice}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-10 px-4 py-10">
        <SearchPanel entries={searchEntries} />
        {children}
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-500">
          Built for student inquiry and critical thinking. Replace TODO_FROM_PDF text
          with verified summaries after reading the article.
        </div>
      </footer>
    </div>
  );
}
