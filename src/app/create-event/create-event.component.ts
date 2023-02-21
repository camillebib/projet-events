import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../events.service';
import { Event } from '../event';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {

  events: Event[] = [];

  constructor (
    public eventsService: EventsService,
    private router: Router
  ) {}

  addOrUpdate(currentEvent: Event){
    if(currentEvent.id === ''){
      this.add(currentEvent);
    }else{
      this.update(currentEvent);
    }
  }
  
  add(currentEvent: Event){
    this.eventsService.addEvent(currentEvent)
    .subscribe(
      (result: Event) => this.eventsService.getEvents()
    );
    this.clear;
    this.router.navigate(['/events']);
  }

  update(currentEvent: Event){
    this.eventsService.updateEvent(currentEvent)
    .subscribe(
      (result: Event) => this.eventsService.getEvents()
    );
    this.clear;
    this.router.navigate(['/events']);
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
