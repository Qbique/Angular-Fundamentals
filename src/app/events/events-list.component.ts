import { Component } from "@angular/core";

@Component({
  selector: "events-list",
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="well hoverwell thumbnail">
        <h2>{{ event.name }}</h2>
        <div>Date: {{ event.date }}</div>
        <div>Time: {{ event.time }}</div>
        <div>Price: {{ event.price }}</div>
        <div>
          <span>Location: {{ event.location.address }}</span>
          <span>&nbsp;</span>
          <span>{{ event.location.city }}, {{ event.location.country }}</span>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent {
  event = {
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
