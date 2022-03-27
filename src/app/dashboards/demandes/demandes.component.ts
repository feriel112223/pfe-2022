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
    console.log(this.demandesServ.getAllDemandes());
    this.demandes = this.demandesServ.getAllDemandes();
  }
  ///clickAddDemandes(){
  /// this.formDemande.reset();
  ///}
  clickAddDemandes() {
    this.showForm = !this.showForm;
  }
  close() {
    this.showForm = !this.showForm;
  }

  openModal(content:any){
    this.modalService.open(content,{size:"lg"})
  }
  saveDemandes() {
    this.toastr.success('Hello world!', 'Toastr fun!');
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
  }
}
