import { Component } from '@angular/core';
import { EventsService } from '../events.service';
import { Event } from '../event';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {

  events: Event[] = [];

  constructor (public eventsService: EventsService) {}
  
  add(currentEvent: Event){
    this.eventsService.addEvent(currentEvent)
    .subscribe(
      (result: Event) => this.eventsService.getEvents()
    );
    this.clear;
  }

  clear(){
    this.eventsService.currentEvent={
      id:'',
      title:'',
      time:'',
      type:''
    }
  }

}
