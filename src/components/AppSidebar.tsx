import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  BarChart3, Building2, Calendar, ChevronDown, ChevronRight, ClipboardList, FileText, Home,
  LayoutGrid, Menu, MessageSquare, MoreHorizontal, RefreshCw, Settings, Sparkles, Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { group: "Leasing journey", items: [
    { to: "/leads", icon: Users, label: "Leads", count: 128 },
    { to: "/conversations", icon: MessageSquare, label: "Conversations", count: 38 },
    { to: "/tours", icon: Calendar, label: "Tours", count: 12 },
    { to: "/applications", icon: FileText, label: "Applications", count: 24 },
    { to: "/renewals", icon: RefreshCw, label: "Renewals", count: 17 },
  ]},
  { group: "Workspace", items: [
    { to: "/properties", icon: Building2, label: "Properties" },
    { to: "/tasks", icon: ClipboardList, label: "Tasks", count: 9 },
    { to: "/analytics", icon: BarChart3, label: "Analytics" },
    { to: "/settings", icon: Settings, label: "Settings" },
  ]},
] as const;

const itemBase = "flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition-colors";
const active = { className: "bg-primary text-primary-foreground [&_svg]:text-primary-foreground" };
const inactive = { className: "hover:bg-secondary" };

export function AppShell({ children }: { children: React.ReactNode }) {
  const [ai, setAi] = useState(true);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="flex min-h-screen gap-4 bg-background p-4 font-sans text-foreground antialiased">
      {open && <div className="fixed inset-0 z-30 bg-foreground/30 md:hidden" onClick={close} />}
      <aside className={cn("z-40 h-[calc(100vh-2rem)] w-60 shrink-0 flex-col rounded-3xl bg-sidebar p-3 md:sticky md:top-4 md:flex", open ? "fixed left-4 top-4 flex shadow-2xl" : "hidden")}>
        <div className="flex items-center justify-between px-1 py-1">
          <Link to="/" onClick={close} className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-primary text-accent"><Home className="h-4 w-4" /></div>
            <span className="text-lg font-semibold tracking-tight">LeaseFlow</span>
          </Link>
          <button onClick={close} className="grid h-8 w-8 place-items-center rounded-full bg-secondary"><Menu className="h-4 w-4" /></button>
        </div>

        <button className="mt-4 flex items-center gap-3 rounded-2xl bg-secondary p-2.5 text-left">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-card"><Building2 className="h-4 w-4" /></div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold">Harborline</div>
            <div className="text-xs text-muted-foreground">6 properties</div>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>

        <nav className="mt-4 flex-1 overflow-y-auto">
          <Link to="/" onClick={close} className={cn(itemBase, "py-2.5")} activeOptions={{ exact: true }} activeProps={active} inactiveProps={inactive}>
            <LayoutGrid className="h-4 w-4 text-muted-foreground" /> Dashboard
          </Link>
          {nav.map((g) => (
            <div key={g.group} className="mt-5">
              <div className="px-3 pb-1.5 text-xs text-muted-foreground">{g.group}</div>
              {g.items.map((it) => (
                <Link key={it.to} to={it.to} onClick={close} className={itemBase} activeProps={active} inactiveProps={inactive}>
                  <it.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="flex-1 text-left">{it.label}</span>
                  {"count" in it && <span className="text-xs opacity-60">{it.count}</span>}
                </Link>
              ))}
            </div>
          ))}
        </nav>

        <div className="rounded-2xl bg-accent p-3 text-accent-foreground">
          <div className="flex items-center gap-2.5">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-primary text-accent"><Sparkles className="h-4 w-4" /></div>
            <div className="flex-1">
              <div className="text-sm font-semibold">LeaseFlow AI</div>
              <div className="text-xs opacity-70">{ai ? "On" : "Off"} · 38 chats</div>
            </div>
            <button onClick={() => setAi(!ai)} className={cn("relative h-6 w-11 rounded-full transition-colors", ai ? "bg-primary" : "bg-muted-foreground/40")} aria-label="Toggle AI">
              <span className={cn("absolute top-1 h-4 w-4 rounded-full bg-card transition-all", ai ? "left-6" : "left-1")} />
            </button>
          </div>
          <Link to="/conversations" onClick={close} className="mt-3 flex w-full items-center justify-between rounded-xl bg-card px-3 py-2 text-xs font-medium">
            4 need your review <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-3 flex items-center gap-3 rounded-2xl bg-secondary p-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-card text-xs font-semibold">JE</div>
          <div className="flex-1">
            <div className="text-sm font-semibold">Jordan Ellis</div>
            <div className="text-xs text-muted-foreground">Leasing Manager</div>
          </div>
          <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <button onClick={() => setOpen(true)} className="mb-3 grid h-11 w-11 place-items-center rounded-full bg-card md:hidden" aria-label="Menu"><Menu className="h-4 w-4" /></button>
        {children}
      </div>
    </div>
  );
}
