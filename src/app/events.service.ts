import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  private eventsUrl = 'http://localhost:3000/events';

  currentEvent: Event = {
    id:'',
    title:'',
    time:'',
    type:''
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(this.eventsUrl);
  }

  addEvent(event: Event):Observable<Event>{
    return this.http.post<Event>(this.eventsUrl, event, this.httpOptions);
  }

  deleteEvent(id: Number):Observable<Event>{
    return this.http.delete<Event>(this.eventsUrl+'/'+id, this.httpOptions);
  }

  updateEvent(event: Event):Observable<any>{
    return this.http.put(this.eventsUrl+'/'+event.id, event, this.httpOptions);
  }
}