import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees:any;
  constructor(private http: HttpClient) {}
  getEmployees(){
    return this.employees;
  }
  postEmployee(data: any) {
    return this.http.post<any>('', data);
  }
  getEmployee() {
    return this.http.get<any>('');
  }
  updateEmployee(data: any, id: number) {
    return this.http.put<any>(' ' + id, data);
  }
  deleteEmployee(id: number) {
    return this.http.delete<any>('' + id);
  }
}
