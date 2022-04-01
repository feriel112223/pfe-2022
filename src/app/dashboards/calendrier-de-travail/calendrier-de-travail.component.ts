import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarOptions } from '@fullcalendar/angular';
 
@Component({
  selector: 'app-calendrier-de-travail',
  templateUrl: './calendrier-de-travail.component.html',
  styleUrls: ['./calendrier-de-travail.component.css']
})
export class CalendrierDeTravailComponent implements OnInit {
  Events = [];

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true
  };
  constructor(private httpClient : HttpClient) { }
  onDateClick(res : any) {
    alert('Clicked on date : ' + res.dateStr)
  }


  ngOnInit(): void {
    setTimeout(() => {
      return this.httpClient
        .get('http://localhost:8000/Event.php')
        .subscribe((res: any) => {
          this.Events.push();
          console.log(this.Events);
        });
    }, 2200);
    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.onDateClick.bind(this),
        events: this.Events,
      };
    }, 2500);
    



  }

}
