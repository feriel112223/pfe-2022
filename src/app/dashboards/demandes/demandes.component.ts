import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DemandesService } from 'src/app/shared/services/demandes.service';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css'],
})
export class DemandesComponent implements OnInit {
  radioItems: any;
  congeTypes: any;
  model = { option: '' };
  model1 = { option1: '' };
  selectedConge: any;
  demandes: any;
  formDemande: FormGroup;
  autorisationForm: FormGroup;
  congeForm: FormGroup;
  showAdd: boolean= false;
  showUpdate : boolean = false ;
  showForm: any;
  constructor(
    private demandesServ: DemandesService,
    private formbuilder: FormBuilder,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {
    this.radioItems = [
      { name: 'Congé', value: 'conge' },
      { name: 'Autorisation', value: 'autorisation' },
    ];
    this.congeTypes = [
      { name: 'Conge solde', value: 'congeSolde' },
      { name: 'Conge sans solde', value: 'congeSansSolde' },
   ];

    this.autorisationForm = this.formbuilder.group({
      heure_debut: ['', Validators.required],
      heure_fin: ['', Validators.required],
      description: [null],
    });
    this.congeForm = this.formbuilder.group({
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      typeConge: ['', Validators.required],
      description: [null],
    });

    this.formDemande = this.formbuilder.group({
      Nom: ['', Validators.required],
      Prenom: ['', Validators.required],
      type: ['', Validators.required],
      congeAut: this.autorisationForm,
      conge: this.congeForm
    });
  }

  ngOnInit(): void {
    /*console.log(this.demandesServ.getAllDemandes());
    this.demandes = this.demandesServ.getAllDemandes();
    */
  }
  ///clickAddDemandes(){
  /// this.formDemande.reset();
  ///}
  clickAddDemandes() {
    this.showForm = !this.showForm;
    this.formDemande.reset();
      this.showAdd = true;
      this.showUpdate = false;
  }
  close() {
    this.showForm = !this.showForm;
  }

  openModal(content:any){
    this.modalService.open(content,{size:"lg"})
  }
  saveDemandes() {
    this.toastr.success('Demande ajoutée avec succé');
    console.log(this.formDemande.value);
    // console.log(this.formDemande.get('Nom')?.value);
    // console.log(this.formDemande.get('Prenom')?.value);
    // console.log(this.formDemande.get('type')?.value);
    // console.log(this.formDemande.get(this.model.option)?.value);
    // console.log(this.formDemande.get(this.model1.option1)?.value);
    // console.log(this.formDemande.get('date_debut')?.value);
    // console.log(this.formDemande.get('date_fin')?.value);
    // console.log(this.formDemande.get('heure_debut')?.value);
    // console.log(this.formDemande.get('heure_fin')?.value);
    // console.log(this.formDemande.get('description')?.value);


    this.demandesServ.postDemande(this.formDemande.value)
    .subscribe(res=>{
      console.log(res);
      this.toastr.success('Demande  ajouté avec succée ');
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formDemande.reset();
      return this.getAllDemande();
    },
    err=>{
      this.toastr.error('Il y a un problém ');
    }
    )
   }
   getAllDemande(){
    this.demandesServ.getAllDemande().subscribe((res : any)=>{
      this.demandes = res;
      console.log(res);

    },
    (err : any)=>{
      console.log(err);
      
    }
    )
  }
  deleteDemande(Demande : any){
    this.demandesServ.deleteDemande(Demande.id)
    .subscribe((res : any )=>{
      this.toastr.success('Demande  supprimer ');
      this.getAllDemande();
    })
  }
  onUpdate(Demande : any){
    this.showAdd = false;
    this.showUpdate = true;
    
    this.demandes.id = this.demandes.id;
    this.formDemande.controls['Nom'].setValue(this.demandes.Nom);
    this.formDemande.controls['Prenom'].setValue(this.demandes.Prenom);
    this.formDemande.controls['type'].setValue(this.demandes.type);
    this.formDemande.controls['date_debut'].setValue(this.demandes.date_debut);
    this.formDemande.controls['date_fin'].setValue(this.demandes.date_fin);
    this.formDemande.controls['heure_debut'].setValue(this.demandes.heure_debut);
    this.formDemande.controls['heure_fin'].setValue(this.demandes.heure_fin);
    this.formDemande.controls['description'].setValue(this.demandes.description);

   
  }
  updateDemandeDetails(){
    this.demandes.Nom = this.formDemande.value.Nom;
    this.demandes.Prenom = this.formDemande.value.Prenom;
    this.demandes.type = this.formDemande.value.type;
    this.demandes.datte_debut = this.formDemande.value.date_debut;
    this.demandes.date_fin = this.formDemande.value.date_fin;
    this.demandes.heure_debut = this.formDemande.value.heure_debut;
    this.demandes.heure_fin = this.formDemande.value.heure_fin;
    this.demandes.description = this.formDemande.value.description;

    

    this.demandes.updateEmployee(this.demandes,this.demandes.id)
    .subscribe((res : any)=>{
      this.toastr.success('Demande modifié');
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formDemande.reset();
      this.getAllDemande();
    })

  }
    

     
   
  
}
