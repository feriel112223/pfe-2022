import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
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
  model2 = { option: '' };
  radioItems2: any;
  showAdd!: boolean;
  showUpdate !: boolean;
  
   constructor(private employeesServ:EmployeeService ,private formbuilder:FormBuilder,private toastr: ToastrService,
    private modalService: NgbModal) {


      this.radioItems2 = [
        { name: 'Femme', value: 'femme' },
        { name: 'Homme', value: 'homme' },
      ];
      
     this.formEmployee  = this.formbuilder.group({

       cin :['', Validators.required],
       Nom :['',Validators.required],
       Prenom :['',Validators.required],
       sexe:['', Validators.required],
       date_nais:['',Validators.required],
       email: ['', Validators.compose([
        Validators.pattern('^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]{0,10})*@[A-Za-z0-9]+(\\.[A-Za-z0-9]{0,10})*(\\.[A-Za-z]{0,5})$'),
        Validators.required])],
       mot_de_passe:['',Validators.required], 
       grade:['',Validators.required],
       salaire:['',Validators.required], 

       tel :['',Validators.required],
     })
     this.getAllEmployee();
    }
 
   ngOnInit(): void {
      //console.log(this.employeesServ.getAllEmployees());
      //this.employees=this.employeesServ.getAllEmployees();
      
   }
   clickAddEmployee(){
      this.showForm= !this.showForm;

      this.formEmployee.reset();
      this.showAdd = true;
      this.showUpdate = false;
   }
   close(){
    this.showForm= !this.showForm;

   }
   openModal(content:any){
    this.modalService.open(content,{size:"lg"})
  }
 
 postEmployeeDetails()
   {
    /* console.log(this.formEmployee.get('Nom')?.value);
     console.log(this.formEmployee.get('Prenom')?.value);
     console.log(this.formEmployee.get('sexe')?.value);
     console.log(this.formEmployee.get('cin')?.value);
     console.log(this.formEmployee.get('date')?.value);
     console.log(this.formEmployee.get('email')?.value);
     console.log(this.formEmployee.get('tel')?.value);
     console.log(this.formEmployee.get('adresse')?.value);
     
   */
  /*
     this.toastr.success('Employé  ajouté avec succée ');
     console.log(this.formEmployee.value);
      */

     this.employeesServ.postEmployee(this.formEmployee.value)
    .subscribe(res=>{
      console.log(res);
      this.toastr.success('Employé  ajouté avec succée ');
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formEmployee.reset();
      return this.getAllEmployee();
    },
    err=>{
      this.toastr.error('Il y a un problém ');
    }
    )
   }
   getAllEmployee(){
    this.employeesServ.getEmployee().subscribe((res : any)=>{
      this.employees = res;
      console.log(res);

    },
    (err : any)=>{
      console.log(err);
      
    }
    )
  }
  deleteEmployee(employee : any){
    this.employeesServ.deleteEmployee(employee.id)
    .subscribe(res=>{
      alert("Employee Deleted !");
      this.getAllEmployee();
    })
  }
  onUpdate(employee : any){
    this.showAdd = false;
    this.showUpdate = true;
    
    this.employees.id = this.employees.id;
    this.formEmployee.controls['cin'].setValue(this.employees.cin);
    this.formEmployee.controls['Nom'].setValue(this.employees.Nom);
    this.formEmployee.controls['Prenom'].setValue(this.employees.Prenom);
    this.formEmployee.controls['sexe'].setValue(this.employees.sexe);
    this.formEmployee.controls['date_nais'].setValue(this.employees.date_nais);
    this.formEmployee.controls['email'].setValue(this.employees.email);
    this.formEmployee.controls['tel'].setValue(this.employees.tel);
    this.formEmployee.controls['grade'].setValue(this.employees.grade);
    this.formEmployee.controls['salaire'].setValue(this.employees.salire);
   
  }
  updateEmployeeDetails(){
    this.employees.cin = this.formEmployee.value.cin;
    this.employees.Nom = this.formEmployee.value.Nom;
    this.employees.Prenom = this.formEmployee.value.Prenom;
    this.employees.sexe = this.formEmployee.value.sexe;
    this.employees.date_nais = this.formEmployee.value.date_nais;
    this.employees.email = this.formEmployee.value.email;
    this.employees.tel = this.formEmployee.value.tel;
    

    this.employees.updateEmployee(this.employees,this.employees.id)
    .subscribe((res : any)=>{
      alert("Update successfully ! ");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formEmployee.reset();
      this.getAllEmployee();
    })

  }
  }
  
  
 
  
   
 
 