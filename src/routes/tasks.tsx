import { createFileRoute } from "@tanstack/react-router";
import { ListPage, pageHead } from "@/components/ListPage";

export const Route = createFileRoute("/tasks")({
  head: pageHead("Tasks", "Follow-ups and to-dos for your team"),
  component: TasksPage,
});

function TasksPage() {
  return (
    <ListPage
      title="Tasks"
      subtitle="Follow-ups and to-dos for your team"
      action="Add task"
      filters={["All", "High", "Medium"]}
      stats={[{"label": "Open", "value": "9", "highlight": true},{"label": "Due today", "value": "4"},{"label": "Overdue", "value": "1"},{"label": "Done this week", "value": "22"}]}
      columns={["Task", "Related to", "Assignee", "Due", "Priority"]}
      rows={[
    ["Send tour times","Sarah Mitchell","Jordan","Today",{"badge": "High", "tone": "warn"}],
    ["Post-tour check-in","Noah Patel","Jordan","Today",{"badge": "Medium"}],
    ["Request proof of income","Daniel Okafor","Alex","Tomorrow",{"badge": "High", "tone": "warn"}],
    ["Renewal offer","Robert Lang","Jordan","Oct 20",{"badge": "Medium"}]
  ]}
    />
  );
}
