import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../events.service';
import { Event } from '../event';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  events: Event[] = [];

  constructor (
    private eventsService: EventsService,
    private router: Router  
  ) {}

  ngOnInit():void{
    this.getEvents();
  }

  getEvents():void{
    this.eventsService.getEvents()
    .subscribe(events => this.events = events);
  }

  delete(idStr:string){
    let id = parseInt(idStr);
    this.eventsService.deleteEvent(id)
    .subscribe((d) => this.getEvents);
    location.reload();
  }

  edit(event: Event){
    this.eventsService.currentEvent = Object.assign({}, event);
    this.router.navigate(['/events/add']);
  }

}