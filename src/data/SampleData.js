export const DEFAULT_CARDS = [
    // BACKLOG
    { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
    { title: "SOX compliance checklist", id: "2", column: "backlog" },
    { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
    { title: "Document Notifications service", id: "4", column: "backlog" },

    // TODO
    {
      title: "Research DB options for new microservice",
      id: "5",
      column: "todo",
    },
    { title: "Postmortem for outage", id: "6", column: "todo" },
    { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },
  
    // DOING
    {
      title: "Refactor context providers to use Zustand",
      id: "8",
      column: "doing",
    },
    { title: "Add logging to daily CRON", id: "9", column: "doing" },
  
    // DONE
    {
      title: "Set up DD dashboards for Lambda listener",
      id: "10",
      column: "done",
    },
  
];

export const DEFAULT_COLUMN = [
    { title: "Backlog", id: 1, column: "backlog", based: true, color:"bg-neutral-500"},
    { title: "TODO", id: 2, column: "todo", based: false, color:"bg-yellow-200"},
    { title: "In progress", id: 3, column: "doing", based: false, color:"bg-blue-200"},
    { title: "Complete", id: 4, column: "done", based: false, color:"bg-emerald-200"},
]