import { createFileRoute } from "@tanstack/react-router";
import { ListPage, pageHead } from "@/components/ListPage";

export const Route = createFileRoute("/tours")({
  head: pageHead("Tours", "Scheduled property tours"),
  component: ToursPage,
});

function ToursPage() {
  return (
    <ListPage
      title="Tours"
      subtitle="Scheduled property tours"
      action="Schedule tour"
      filters={["All", "Confirmed", "Scheduled", "Rescheduled"]}
      stats={[{"label": "Today", "value": "4", "highlight": true},{"label": "This week", "value": "12"},{"label": "Show rate", "value": "86%"},{"label": "Open slots", "value": "3"}]}
      columns={["Prospect", "Time", "Property", "Type", "Status"]}
      rows={[
    ["Lena Fischer","10:30 AM","The Alder \u00b7 410","Agent-led",{"badge": "Confirmed", "tone": "dark"}],
    ["Daniel Okafor","12:00 PM","Marlowe Court \u00b7 312","Self-guided",{"badge": "Confirmed", "tone": "dark"}],
    ["Priya Shah","2:30 PM","Juniper Flats \u00b7 118","Virtual",{"badge": "Scheduled"}],
    ["Tom Becker","4:30 PM","The Alder \u00b7 507","Agent-led",{"badge": "Rescheduled", "tone": "warn"}]
  ]}
    />
  );
}
