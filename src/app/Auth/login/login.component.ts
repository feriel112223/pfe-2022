import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {}


  constructor(private auth:AuthService) { }
  

  ngOnInit(): void {
    
  }
  loginUser(){
    this.auth.loginUser(this.loginUserData)
    .subscribe(
      res =>console.log(res),
      err => console.log(err)
      
      
    )
  }

}
