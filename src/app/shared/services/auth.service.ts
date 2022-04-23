import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private path ="http://127.0.0.1:8000/api/Employes";
  email : string = '';

  constructor(private http:HttpClient) { }
  // login
  loginUser(data:any): Observable<any>{
    return this.http.post<any>(this.path,data);
  }
  // sign out
  logout(){
    
  }
  // forgot password
  forgotPassword(){
    
  }


}
