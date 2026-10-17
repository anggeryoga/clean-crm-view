import { createFileRoute } from "@tanstack/react-router";
import { ListPage, pageHead } from "@/components/ListPage";

export const Route = createFileRoute("/conversations")({
  head: pageHead("Conversations", "Chats handled by you and LeaseFlow AI"),
  component: ConversationsPage,
});

function ConversationsPage() {
  return (
    <ListPage
      title="Conversations"
      subtitle="Chats handled by you and LeaseFlow AI"
      
      filters={["All", "Review", "AI"]}
      stats={[{"label": "Active", "value": "38"},{"label": "Needs review", "value": "4", "highlight": true},{"label": "AI handled", "value": "31"},{"label": "Avg. response", "value": "2 min"}]}
      columns={["Contact", "Property", "Last message", "Status", "Time"]}
      rows={[
    ["Marcus Reed","Marlowe Court","Can you waive the application fee?",{"badge": "Review", "tone": "accent"},"4 min ago"],
    ["Aisha Rahman","Juniper Flats","My credit score is around 580.",{"badge": "Review", "tone": "accent"},"12 min ago"],
    ["Kevin Tran","Beacon Yard","I need to speak with a person.",{"badge": "Review", "tone": "accent"},"18 min ago"],
    ["Grace Kim","Oakline Lofts","Thanks, see you Friday!",{"badge": "AI"},"1 h ago"]
  ]}
    />
  );
}
