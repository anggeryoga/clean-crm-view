import { createFileRoute } from "@tanstack/react-router";
import { ListPage, pageHead } from "@/components/ListPage";

export const Route = createFileRoute("/leads")({
  head: pageHead("Leads", "All prospects across your properties"),
  component: LeadsPage,
});

function LeadsPage() {
  return (
    <ListPage
      title="Leads"
      subtitle="All prospects across your properties"
      action="Add lead"
      filters={["All", "New", "Qualified", "Tour"]}
      stats={[{"label": "Total leads", "value": "128"},{"label": "New this week", "value": "34"},{"label": "Qualified", "value": "79"},{"label": "Conversion", "value": "8.6%", "highlight": true}]}
      columns={["Name", "Property", "Source", "Stage", "Last contact"]}
      rows={[
    ["Lena Fischer","The Alder","Website",{"badge": "New", "tone": "accent"},"Today"],
    ["Daniel Okafor","Marlowe Court","Zillow",{"badge": "Qualified"},"Yesterday"],
    ["Priya Shah","Juniper Flats","Referral",{"badge": "Tour"},"2 days ago"],
    ["Tom Becker","The Alder","Walk-in",{"badge": "Qualified"},"3 days ago"],
    ["Sofia Lind","Beacon Yard","Apartments.com",{"badge": "New", "tone": "accent"},"Today"]
  ]}
    />
  );
}
