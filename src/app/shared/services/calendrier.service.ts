import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendrierService {
  events:any;
  path ="http://127.0.0.1:8000/";

  constructor(private http : HttpClient) { }
  postEvent(data: any) : Observable<any>{
    return this.http.post<any>(this.path + "/" , data);
  }
  getEvent() : Observable<any> {
    return this.http.get<any>(this.path + "/");
  }
  deleteEvent(id: number) {
    return this.http.delete<any>(this.path + "/Employes/"+id );
  }
}
