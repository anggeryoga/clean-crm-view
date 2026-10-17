import { createFileRoute } from "@tanstack/react-router";
import { ListPage, pageHead } from "@/components/ListPage";

export const Route = createFileRoute("/settings")({
  head: pageHead("Settings", "Team members and workspace preferences"),
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <ListPage
      title="Settings"
      subtitle="Team members and workspace preferences"
      action="Invite member"
      
      stats={[{"label": "Members", "value": "8"},{"label": "Admins", "value": "2"},{"label": "Properties", "value": "6"},{"label": "Plan", "value": "Pro", "highlight": true}]}
      columns={["Name", "Email", "Role", "Access", "Status"]}
      rows={[
    ["Jordan Ellis","jordan@harborline.com","Leasing Manager","All properties",{"badge": "Active", "tone": "dark"}],
    ["Alex Moreno","alex@harborline.com","Agent","The Alder",{"badge": "Active", "tone": "dark"}],
    ["Nina Park","nina@harborline.com","Agent","Marlowe Court",{"badge": "Active", "tone": "dark"}],
    ["Sam Lee","sam@harborline.com","Admin","All properties",{"badge": "Invited"}]
  ]}
    />
  );
}
