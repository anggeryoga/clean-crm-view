import { createFileRoute } from "@tanstack/react-router";
import { ListPage, pageHead } from "@/components/ListPage";

export const Route = createFileRoute("/applications")({
  head: pageHead("Applications", "Rental applications in review"),
  component: ApplicationsPage,
});

function ApplicationsPage() {
  return (
    <ListPage
      title="Applications"
      subtitle="Rental applications in review"
      action="New application"
      filters={["All", "Pending", "Approved", "Missing"]}
      stats={[{"label": "Total", "value": "24"},{"label": "Pending", "value": "9", "highlight": true},{"label": "Approved", "value": "15"},{"label": "Missing info", "value": "5"}]}
      columns={["Applicant", "Unit", "Submitted", "Status", "Note"]}
      rows={[
    ["Daniel Okafor","Marlowe Court 312","Oct 14",{"badge": "Missing", "tone": "warn"},"Proof of income"],
    ["Emily Hart","The Alder 221","Oct 13",{"badge": "Missing", "tone": "warn"},"Photo ID"],
    ["Liam Ortiz","Juniper Flats 204","Oct 12",{"badge": "Pending"},"Screening"],
    ["Mia Chen","Beacon Yard 9","Oct 10",{"badge": "Approved", "tone": "dark"},"Ready to sign"]
  ]}
    />
  );
}
