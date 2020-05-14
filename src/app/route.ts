import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";

export const appRoutes = [
  { path: "envents", component: EventsListComponent },
  { path: "envents/:id", component: EventDetailsComponent },
  { path: "", redirectTo: "/events", pathMatch: "full" },
];
