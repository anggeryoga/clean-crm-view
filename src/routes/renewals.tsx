import { createFileRoute } from "@tanstack/react-router";
import { ListPage, pageHead } from "@/components/ListPage";

export const Route = createFileRoute("/renewals")({
  head: pageHead("Renewals", "Leases expiring in the next 90 days"),
  component: RenewalsPage,
});

function RenewalsPage() {
  return (
    <ListPage
      title="Renewals"
      subtitle="Leases expiring in the next 90 days"
      
      filters={["All", "Pending", "Renewed"]}
      stats={[{"label": "Due in 90 days", "value": "17", "highlight": true},{"label": "Renewed", "value": "6"},{"label": "Pending", "value": "8"},{"label": "Moving out", "value": "3"}]}
      columns={["Resident", "Unit", "Lease end", "Status", "Days left"]}
      rows={[
    ["Robert Lang","Finch & Ninth 305","Nov 14",{"badge": "Pending"},"28"],
    ["Grace Kim","Oakline Lofts 112","Nov 20",{"badge": "Pending"},"34"],
    ["Omar Haddad","The Alder 118","Dec 2",{"badge": "Renewed", "tone": "dark"},"46"],
    ["Julia Novak","Marlowe Court 401","Dec 30",{"badge": "Pending"},"74"]
  ]}
    />
  );
}
