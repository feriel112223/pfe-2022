import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemandesService {
  demandes: any;

  constructor(private http: HttpClient) {
    this.demandes = [
      {
        Nom:'abbes',
        Prenom:'feriel',
        type:'Autorisation',
        hdebut:'jjj',
        hfin:'hhh',
        description:'aaaa',
        
      },
      {
        
        Nom:'Benali',
        Prenom:'ahmed',
        type:'congés sans solde',
        hdebut:'ddddd',
        hfin:'hhhh',
        description:'hhhhhh',
          
      }
      
        ];
  }

  /**
   * test
   */
  getAllDemandes(){
    return this.demandes;
  }

  postDemande(data: any) {
    return this.http.post<any>('', data);
  }
  getDemande() {
    return this.http.get<any>('');
  }
  updateDemande(data: any, id: number) {
    return this.http.put<any>(' ' + id, data);
  }
  deleteDemande(id: number) {
    return this.http.delete<any>('' + id);
  }
}
