import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CreateEventComponent } from './create-event/create-event.component';

const routes: Routes = [
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'events', component: CalendarComponent},
  {path: 'events/add', component: CreateEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
