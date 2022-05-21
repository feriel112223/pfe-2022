import {  OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalendrierService } from 'src/app/shared/services/calendrier.service';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};
 
@Component({
  selector: 'app-calendrier-de-travail',
  templateUrl: './calendrier-de-travail.component.html',
  styleUrls: ['./calendrier-de-travail.component.css']
})
export class CalendrierDeTravailComponent implements OnInit {
  showForm=false;


  
  @ViewChild('modalContent') modalContent!: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;
  formEvent:FormGroup;
  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData?: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();

  events: CalendarEvent[] = [
     //{
      // start: subDays(startOfDay(new Date()), 1),
    //   end: addDays(new Date(), 1),
    //   title: 'A 3 day event',
    //   color: colors.red,
    //   actions: this.actions,
    //   allDay: true,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true,
    //   },
    //   draggable: true,
    // },
    
  ];

  activeDayIsOpen: boolean = true;

  constructor(private modalService: NgbModal,private formbuilder:FormBuilder
    ,private calendrierServ:CalendrierService) {
    this.formEvent = this.formbuilder.group({

      dateEvent :['', Validators.required],
      heureStart :['',Validators.required],
      heureEnd:['',Validators.required],
      event:['', Validators.required],
    })
    this.getAllEvent();
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  getAllEvent(){
    // this.employeesServ.getEmployee().subscribe((res : any)=>{
    //   this.employees = res;
    //   console.log(res);

    // },
    // (err : any)=>{
    //   console.log(err);
      
    // }
    // )
  }
  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modalService.open(this.modalContent, { size: 'lg' });
  }
  clickAddEvent(content:any){
    this.showForm= !this.showForm;

    this.formEvent.reset();
    this.openModal(content)
 }
 openModal(content:any){
  this.modalService.open(content,{size:"lg"})
}
  close(){
    this.showForm= !this.showForm;

   }
  // openModal(content:any){
   // this.modalService.open(content,{size:"lg"})
  //}
  postEvent(){
  this.calendrierServ.postEvent(this.formEvent.value)
  .subscribe((res:any)=>{
    console.log(res);
    alert("Votre tache ajouté avec succé!");
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formEvent.reset();
    return this.getAllEvent();
  },
  err=>{
    alert("Il y'a un problèm!");
  }
  )
  }

  addEvent(): void {
    
    /**
     * 
     */ 

    const dateDeb  =new Date(this.formEvent.get('dateEvent')?.value )
    dateDeb.setHours(this.formEvent.get('heureStart')?.value.hour)
    dateDeb.setMinutes(this.formEvent.get('heureStart')?.value.minute)
    const dateFin  =new Date(this.formEvent.get('dateEvent')?.value )
    dateFin.setHours(this.formEvent.get('heureEnd')?.value.hour)
    dateFin.setMinutes(this.formEvent.get('heureEnd')?.value.minute)
    
    this.formEvent.get("heureStart")?.setValue(dateDeb)
    this.formEvent.get("heureEnd")?.setValue(dateFin)
    console.log(this.formEvent.value);
    
    this.events = [
      ...this.events,
      {
        title: this.formEvent.get('event')?.value,
        start: this.formEvent.get('heureStart')?.value,
        end: this.formEvent.get('heureEnd')?.value,
        color: colors.red,
        draggable: true,
       
      },
    ];
   
    this.modalService.dismissAll()
  }

  deleteEvent(event : any){
    this.calendrierServ.deleteEvent(event.id)
    .subscribe(res=>{
      alert('votre tache est  supprimée !');
     
      this.getAllEvent();
    })
  }

  //deleteEvent(eventToDelete: CalendarEvent) {
    //this.events = this.events.filter((event) => event !== eventToDelete);
  //}

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  ngOnInit(): void {

  }

}
