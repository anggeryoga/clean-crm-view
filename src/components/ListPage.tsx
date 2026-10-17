import { Plus, Search } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type Stat = { label: string; value: string; highlight?: boolean };

export function ListPage({
  title, subtitle, action, stats, columns, rows, filters,
}: {
  title: string;
  subtitle: string;
  action?: string;
  stats: Stat[];
  columns: string[];
  rows: (string | { badge: string; tone?: "accent" | "dark" | "muted" | "warn" })[][];
  filters?: string[];
}) {
  const [q, setQ] = useState("");
  const [f, setF] = useState(filters?.[0] ?? "");
  const shown = rows.filter((r) => {
    const text = r.map((c) => (typeof c === "string" ? c : c.badge)).join(" ").toLowerCase();
    const matchF = !filters || f === filters[0] || text.includes(f.toLowerCase());
    return matchF && text.includes(q.toLowerCase());
  });

  return (
    <main className="space-y-4">
      <header className="flex flex-wrap items-end gap-3">
        <div className="mr-auto">
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <label className="flex h-11 w-56 items-center gap-2 rounded-full bg-card px-4 text-sm text-muted-foreground">
          <Search className="h-4 w-4" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" className="w-full bg-transparent outline-none" />
        </label>
        {action && (
          <button className="flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground">
            <Plus className="h-4 w-4" /> {action}
          </button>
        )}
      </header>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className={cn("flex h-28 flex-col justify-between rounded-3xl p-4", s.highlight ? "bg-accent" : "bg-card")}>
            <div className={cn("text-xs", !s.highlight && "text-muted-foreground")}>{s.label}</div>
            <div className="text-3xl font-medium tracking-tight">{s.value}</div>
          </div>
        ))}
      </div>

      <section className="rounded-3xl bg-card p-5">
        {filters && (
          <div className="mb-4 flex w-fit flex-wrap rounded-full bg-secondary p-1">
            {filters.map((x) => (
              <button key={x} onClick={() => setF(x)} className={cn("rounded-full px-3.5 py-1.5 text-xs font-medium", f === x ? "bg-primary text-primary-foreground" : "text-muted-foreground")}>{x}</button>
            ))}
          </div>
        )}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs text-muted-foreground">
                {columns.map((c) => <th key={c} className="whitespace-nowrap px-3 py-2.5 font-medium">{c}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {shown.map((r, i) => (
                <tr key={i} className="transition-colors hover:bg-secondary">
                  {r.map((c, j) => (
                    <td key={j} className={cn("whitespace-nowrap px-3 py-3", j === 0 && "font-semibold")}>
                      {typeof c === "string" ? c : (
                        <span className={cn("rounded-full px-2.5 py-1 text-xs font-medium",
                          c.tone === "accent" ? "bg-accent" : c.tone === "dark" ? "bg-primary text-primary-foreground" : c.tone === "warn" ? "bg-destructive/10 text-destructive" : "bg-secondary")}>{c.badge}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              {shown.length === 0 && <tr><td colSpan={columns.length} className="px-3 py-8 text-center text-muted-foreground">No results</td></tr>}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export const pageHead = (title: string, description: string) => () => ({
  meta: [
    { title: `${title} — LeaseFlow CRM` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} — LeaseFlow CRM` },
    { property: "og:description", content: description },
  ],
});
