import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {}
  loginForm : FormGroup
  


  constructor(private auth:AuthService,private formbuilder: FormBuilder,) { 
    this.loginForm = this.formbuilder.group({
      email: ['', Validators.compose([
        Validators.pattern('^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]{0,10})*@[A-Za-z0-9]+(\\.[A-Za-z0-9]{0,10})*(\\.[A-Za-z]{0,5})$'),
        Validators.required])],
      mot_de_passe: ['', Validators.required],
    });
  }
  

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
