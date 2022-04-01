import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  

  constructor() { }
  dropDownProfil='none';
  dropDownNotification='none';
  ngOnInit(): void {
  }

  toggleDropDown(){
    if(this.dropDownProfil=="block"){
    this.dropDownProfil="none"
    }else{
    this.dropDownProfil="block"

    }
  }
  toggleDropDownN(){
    if(this.dropDownNotification=="block"){
      this.dropDownNotification="none"
      }else{
      this.dropDownNotification="block"
  
      }

  }
  
}
