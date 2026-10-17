import { createFileRoute } from "@tanstack/react-router";
import { ListPage, pageHead } from "@/components/ListPage";

export const Route = createFileRoute("/analytics")({
  head: pageHead("Analytics", "Leasing performance over the last 30 days"),
  component: AnalyticsPage,
});

function AnalyticsPage() {
  return (
    <ListPage
      title="Analytics"
      subtitle="Leasing performance over the last 30 days"
      
      
      stats={[{"label": "Leads", "value": "128"},{"label": "Tours", "value": "46"},{"label": "Leases", "value": "11"},{"label": "Conversion", "value": "8.6%", "highlight": true}]}
      columns={["Property", "Leads", "Tours", "Applications", "Leases"]}
      rows={[
    ["The Alder","34","12","7","3"],
    ["Marlowe Court","28","10","6","2"],
    ["Juniper Flats","22","9","4","2"],
    ["Beacon Yard","20","7","3","2"],
    ["Oakline Lofts","14","5","2","1"],
    ["Finch & Ninth","10","3","2","1"]
  ]}
    />
  );
}
