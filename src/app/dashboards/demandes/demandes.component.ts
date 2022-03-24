import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemandesService } from 'src/app/shared/services/demandes.service';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {

  radioItems: Array<string>;
  radioItems1: Array<string>;
  model   = {option: ''};
  model1   = {option1: ''};

 demandes:any;
 formDemande:FormGroup;
 showForm:any;
  constructor(private demandesServ:DemandesService,private formbuilder:FormBuilder) {
    this.radioItems = ['Congé', 'Autorisation'];
    this.radioItems1 = ['Congé soldé', 'Congé sans solde '];

    this.formDemande  = this.formbuilder.group({

      Nom:['',Validators.required],
      Prenom :['',Validators.required],
      type:['',Validators.required],
      description :['',Validators.required],
      date_debut:['',Validators.required],
      date_fin:['',Validators.required],
      heure_debut:['',Validators.required],
      heure_fin:['',Validators.required],
     
      
      
    })
   }

  ngOnInit(): void {
    console.log(this.demandesServ.getAllDemandes());
    this.demandes=this.demandesServ.getAllDemandes();
  }
  ///clickAddDemandes(){
   /// this.formDemande.reset();
  ///}
  clickAddDemandes(){
    this.showForm= !this.showForm;
    
  }
  close(){
    this.showForm= !this.showForm;

  }
  

  saveDemandes(){
    console.log(this.formDemande.get('Nom')?.value);
    console.log(this.formDemande.get('Prenom')?.value);
    console.log(this.formDemande.get('type')?.value);
    console.log(this.formDemande.get(this.model.option)?.value);
    console.log(this.formDemande.get(this.model1.option1)?.value);
    console.log(this.formDemande.get('date_debut')?.value);
    console.log(this.formDemande.get('date_fin')?.value);
    console.log(this.formDemande.get('heure_debut')?.value);
    console.log(this.formDemande.get('heure_fin')?.value);
    console.log(this.formDemande.get('description')?.value);
  }

}
