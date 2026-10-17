import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Bell, Building2, Calendar, ChevronDown, ChevronRight, ChevronsRight, FileText, Home,
  LayoutGrid, Menu, MessageSquare, MoreHorizontal, BarChart3, ClipboardList, RefreshCw,
  Search, Settings, Sparkles, Users, Plus, Clock, ArrowUpRight, ArrowDownRight, Signal,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — LeaseFlow CRM" },
      { name: "description", content: "Track leads, tours, applications and renewals in one leasing CRM." },
      { property: "og:title", content: "Dashboard — LeaseFlow CRM" },
      { property: "og:description", content: "Track leads, tours, applications and renewals in one leasing CRM." },
    ],
  }),
  component: Dashboard,
});

const nav = [
  { group: "Leasing journey", items: [
    { icon: Users, label: "Leads", count: 128 },
    { icon: MessageSquare, label: "Conversations", count: 38 },
    { icon: Calendar, label: "Tours", count: 12 },
    { icon: FileText, label: "Applications", count: 24 },
    { icon: RefreshCw, label: "Renewals", count: 17 },
  ]},
  { group: "Workspace", items: [
    { icon: Building2, label: "Properties" },
    { icon: ClipboardList, label: "Tasks", count: 9 },
    { icon: BarChart3, label: "Analytics" },
    { icon: Settings, label: "Settings" },
  ]},
];

const stats = [
  { label: "New leads", value: "128", delta: "12%", up: true },
  { label: "Active conversations", value: "38", delta: "6", up: true },
  { label: "Tours scheduled", value: "12", delta: "3", up: true },
  { label: "Applications", value: "24", delta: "4", up: true },
  { label: "Pending applications", value: "9", delta: "2", up: false },
  { label: "Renewals due", value: "17", note: "90 days" },
  { label: "Conversion rate", value: "8.6%", delta: "1.2", up: true, highlight: true },
];

const pipeline = [
  { stage: "New Lead", pct: "62%", value: 128, h: 100, unit: "prospects", active: true },
  { stage: "Qualified", pct: "58%", value: 79, h: 62, unit: "prospects" },
  { stage: "Tour", pct: "52%", value: 46, h: 36, unit: "prospects" },
  { stage: "Applied", pct: "63%", value: 24, h: 22, unit: "prospects" },
  { stage: "Approved", pct: "73%", value: 15, h: 14, unit: "prospects" },
];

const tours = [
  { time: "10:30", ap: "AM", name: "Lena Fischer", meta: "The Alder · 410 · Agent-led", status: "Confirmed" },
  { time: "12:00", ap: "PM", name: "Daniel Okafor", meta: "Marlowe Court · 312 · Self-guided", status: "Confirmed" },
  { time: "2:30", ap: "PM", name: "Priya Shah", meta: "Juniper Flats · 118 · Virtual", status: "Scheduled" },
  { time: "4:30", ap: "PM", name: "Tom Becker", meta: "The Alder · 507 · Agent-led", status: "Rescheduled" },
];

const convos = [
  { i: "MR", name: "Marcus Reed", prop: "Marlowe Court", msg: "Can you waive the application fee?", tag: "Pricing exception", intent: "High intent", ago: "4 min ago" },
  { i: "AR", name: "Aisha Rahman", prop: "Juniper Flats", msg: "My credit score is around 580. Is that ok?", tag: "Screening question", intent: "Medium intent", ago: "12 min ago" },
  { i: "KT", name: "Kevin Tran", prop: "Beacon Yard", msg: "I need to speak with a person about this.", tag: "Asked for a person", intent: "High intent", ago: "18 min ago" },
];

const statusDot: Record<string, string> = {
  Confirmed: "bg-success", Scheduled: "bg-muted-foreground", Rescheduled: "bg-warning",
};

function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <section className={cn("rounded-3xl bg-card p-5", className)}>{children}</section>;
}

function Dashboard() {
  const [range, setRange] = useState("30 days");

  return (
      <main className="min-w-0 flex-1 space-y-4">
      <main className="min-w-0 flex-1 space-y-4">
        <header className="flex flex-wrap items-center gap-3">
          <h1 className="mr-auto text-3xl font-semibold tracking-tight">Good morning, Jordan</h1>
          <label className="flex h-11 w-56 items-center gap-2 rounded-full bg-card px-4 text-sm text-muted-foreground">
            <Search className="h-4 w-4" />
            <input placeholder="Search" className="w-full bg-transparent outline-none placeholder:text-muted-foreground" />
          </label>
          <button className="flex h-11 items-center gap-2 rounded-full bg-card px-4 text-sm font-medium">
            <Building2 className="h-4 w-4" /> All properties <ChevronDown className="h-4 w-4" />
          </button>
          <button className="relative grid h-11 w-11 place-items-center rounded-full bg-card">
            <Bell className="h-4 w-4" /><span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-destructive" />
          </button>
          <button className="flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground">
            <ChevronsRight className="h-4 w-4" /> View Leasing Pipeline
          </button>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-7">
          {stats.map((s) => (
            <div key={s.label} className={cn("flex h-28 flex-col justify-between rounded-3xl p-4", s.highlight ? "bg-accent" : "bg-card")}>
              <div className={cn("truncate text-xs", s.highlight ? "font-medium" : "text-muted-foreground")}>{s.label}</div>
              <div className="flex items-end justify-between">
                <span className="text-3xl font-medium tracking-tight">{s.value}</span>
                <span className="flex items-center gap-0.5 text-xs text-muted-foreground">
                  {s.delta && (s.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />)}
                  {s.delta ?? s.note}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pipeline */}
        <Card className="p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Leasing pipeline</h2>
              <p className="text-sm text-muted-foreground">New lead to signed lease · all properties</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex rounded-full bg-secondary p-1">
                {["30 days", "Quarter", "Year"].map((r) => (
                  <button key={r} onClick={() => setRange(r)} className={cn("rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors", range === r ? "bg-primary text-primary-foreground" : "text-muted-foreground")}>{r}</button>
                ))}
              </div>
              <button className="grid h-9 w-9 place-items-center rounded-full bg-secondary"><MoreHorizontal className="h-4 w-4" /></button>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 rounded-3xl bg-secondary p-3 md:grid-cols-3 xl:grid-cols-6">
            {pipeline.map((p) => (
              <div key={p.stage} className="flex flex-col rounded-2xl bg-card p-3.5">
                <div className="flex items-center justify-between text-xs">
                  <span className={cn("flex items-center gap-1.5 rounded-full px-2.5 py-1 font-medium", p.active ? "bg-accent" : "bg-secondary")}>
                    {!p.active && <span className="h-1.5 w-1.5 rounded-full bg-warning" />}{p.stage}
                  </span>
                  <span className="flex items-center text-muted-foreground">{p.pct}<ChevronRight className="h-3 w-3" /></span>
                </div>
                <div className="mt-4 flex h-20 items-end">
                  <div className="hatch w-full rounded-xl" style={{ height: `${p.h}%` }} />
                </div>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-3xl font-medium tracking-tight">{p.value}</span>
                  <span className="text-xs text-muted-foreground">{p.unit}</span>
                </div>
              </div>
            ))}
            <div className="flex flex-col rounded-2xl bg-card p-3.5">
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full bg-primary px-2.5 py-1 font-medium text-primary-foreground">Leased</span>
                <span className="text-muted-foreground">8.6% of leads</span>
              </div>
              <div className="mt-4 flex h-20 items-end"><div className="h-3 w-full rounded-full bg-accent" /></div>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-3xl font-medium tracking-tight">11</span>
                <span className="text-xs text-muted-foreground">leases</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Bottom grid */}
        <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
          <Card className="flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold tracking-tight">Today's tours</h3>
              <button className="flex items-center gap-1 text-sm font-medium">All tours <ChevronRight className="h-4 w-4" /></button>
            </div>
            <ul className="mt-3 flex-1 divide-y divide-border">
              {tours.map((t) => (
                <li key={t.name} className="grid grid-cols-[3.5rem_minmax(0,1fr)_auto] items-center gap-3 py-3">
                  <div className="leading-tight"><div className="font-semibold">{t.time}</div><div className="text-xs text-muted-foreground">{t.ap}</div></div>
                  <div className="min-w-0"><div className="text-sm font-semibold">{t.name}</div><div className="truncate text-xs text-muted-foreground">{t.meta}</div></div>
                  <span className="flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium">
                    <span className={cn("h-1.5 w-1.5 rounded-full", statusDot[t.status])} />{t.status}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-3 rounded-2xl bg-secondary p-3">
              <div className="text-xs text-muted-foreground">Open slots today</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {["1:00 PM", "3:30 PM", "5:00 PM"].map((s) => (
                  <button key={s} className="flex items-center gap-1 rounded-full border border-dashed border-muted-foreground/50 px-3 py-1.5 text-xs font-medium hover:bg-card"><Plus className="h-3 w-3" />{s}</button>
                ))}
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">AI conversations to review</h3>
                <p className="text-sm text-muted-foreground">The assistant paused these for your call</p>
              </div>
              <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-medium">4 waiting</span>
            </div>
            <div className="mt-4 space-y-3">
              {convos.map((c) => (
                <div key={c.name} className="rounded-2xl bg-secondary p-3.5">
                  <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-muted-foreground/20 text-xs font-semibold">{c.i}</div>
                    <div className="min-w-0">
                      <div className="text-sm"><span className="font-semibold">{c.name}</span> <span className="text-xs text-muted-foreground">· {c.prop}</span></div>
                      <div className="truncate text-xs text-muted-foreground">"{c.msg}"</div>
                    </div>
                    <button className="rounded-full bg-card px-3.5 py-1.5 text-xs font-semibold">Review</button>
                  </div>
                  <div className="mt-3 flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 font-medium"><Sparkles className="h-3 w-3" />{c.tag}</span>
                    <span className="flex items-center gap-1 font-medium"><Signal className="h-3.5 w-3.5" />{c.intent}</span>
                    <span className="ml-auto text-muted-foreground">{c.ago}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-3 rounded-3xl bg-secondary p-3 lg:col-span-2 2xl:col-span-1">
            {[
              { icon: FileText, title: "Applications missing information", n: 5, rows: [["Daniel Okafor · Marlowe Court 312", "Proof of income"], ["Emily Hart · The Alder 221", "Photo ID"]], warn: true },
              { icon: RefreshCw, title: "Renewals due soon", n: 6, rows: [["Robert Lang · Finch & Ninth 305", "28 days left"], ["Grace Kim · Oakline Lofts 112", "34 days left"]] },
              { icon: Clock, title: "Follow-ups due", n: 8, rows: [["Sarah Mitchell · Send tour times", "Today"], ["Noah Patel · Post-tour check-in", "Today"]] },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl bg-card p-4">
                <div className="flex items-center gap-2 border-b border-border pb-3">
                  <b.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="flex-1 text-sm font-medium">{b.title}</span>
                  <span className="text-xs text-muted-foreground">{b.n}</span><ChevronRight className="h-4 w-4" />
                </div>
                {b.rows.map(([l, r]) => (
                  <div key={l} className="flex items-center justify-between gap-3 pt-3 text-sm">
                    <span className="truncate font-medium">{l}</span>
                    <span className={cn("shrink-0 text-xs", b.warn ? "text-destructive" : "text-muted-foreground")}>{r}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
  );
}
