import { createFileRoute } from "@tanstack/react-router";
import { ListPage, pageHead } from "@/components/ListPage";

export const Route = createFileRoute("/properties")({
  head: pageHead("Properties", "Harborline portfolio"),
  component: PropertiesPage,
});

function PropertiesPage() {
  return (
    <ListPage
      title="Properties"
      subtitle="Harborline portfolio"
      action="Add property"
      
      stats={[{"label": "Properties", "value": "6"},{"label": "Units", "value": "842"},{"label": "Occupancy", "value": "94%", "highlight": true},{"label": "Vacant", "value": "51"}]}
      columns={["Property", "Address", "Units", "Occupancy", "Status"]}
      rows={[
    ["The Alder","12 Alder St","180","96%",{"badge": "Leasing", "tone": "accent"}],
    ["Marlowe Court","88 Marlowe Ave","142","93%",{"badge": "Leasing", "tone": "accent"}],
    ["Juniper Flats","5 Juniper Rd","96","91%",{"badge": "Leasing", "tone": "accent"}],
    ["Beacon Yard","210 Beacon Way","164","97%",{"badge": "Stable"}],
    ["Oakline Lofts","41 Oak Ln","120","95%",{"badge": "Stable"}],
    ["Finch & Ninth","900 Ninth St","140","92%",{"badge": "Stable"}]
  ]}
    />
  );
}
