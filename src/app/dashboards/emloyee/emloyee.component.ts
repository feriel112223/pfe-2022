import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-emloyee',
  templateUrl: './emloyee.component.html',
  styleUrls: ['./emloyee.component.css']
})
export class EmloyeeComponent implements OnInit {
  employees:any;
  formEmployee:FormGroup;
  showForm=false;
  
   constructor(private employeesServ:EmployeeService ,private formbuilder:FormBuilder) {
      
     this.formEmployee  = this.formbuilder.group({

       cin :['', Validators.required],
       Nom :['',Validators.required],
       Prenom :['',Validators.required],
       sexe:['', Validators.required],
       date_nais:['',Validators.required],
       email: ['', Validators.compose([
        Validators.pattern('^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]{0,10})*@[A-Za-z0-9]+(\\.[A-Za-z0-9]{0,10})*(\\.[A-Za-z]{0,5})$'),
        Validators.required])],
       tel :['',Validators.required],
       adresse :['',Validators.required]
     })
    }
 
   ngOnInit(): void {
      //console.log(this.employeesServ.getAllEmployees());
      //this.employees=this.employeesServ.getAllEmployees();
      
   }
   clickAddEmployee(){
      this.showForm= !this.showForm;
   }
   close(){
    this.showForm= !this.showForm;

   }
 
   postEmployeeDetails(){
    /* console.log(this.formEmployee.get('Nom')?.value);
     console.log(this.formEmployee.get('Prenom')?.value);
     console.log(this.formEmployee.get('sexe')?.value);
     console.log(this.formEmployee.get('cin')?.value);
     console.log(this.formEmployee.get('date')?.value);
     console.log(this.formEmployee.get('email')?.value);
     console.log(this.formEmployee.get('tel')?.value);
     console.log(this.formEmployee.get('adresse')?.value);
     
   */
     console.log(this.formEmployee.value);
   }
   /*
   deleteEmployee(row : any){
    this.api.deleteEmployee(row.id)
    .subscribe(res=>{
      alert("Employee Deleted !");
      this.getAllEmployee();
    })
   }
    */

   /* 
   getAllEmployee(){
    this.api.getEmployee()
    .subscribe(res=>{
      return this.employeeData = res;
    })
  }
   */
  
   


    
  }
  
  
 
  
   
 
 