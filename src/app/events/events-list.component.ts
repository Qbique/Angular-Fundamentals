import { Component } from "@angular/core";

@Component({
  selector: "events-list",
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <event-thumbnail [event]="event1"></event-thumbnail>
    </div>
  `,
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: "Angular Connect",
    date: "05/09/2020",
    time: "15:21",
    price: 599.99,
    imageUrl: "/assets/images/angularconnect-shield.png",
    location: {
      address: "Mets 2020",
      city: "Pagkratara",
      country: "Athens",
    },
  };
}
