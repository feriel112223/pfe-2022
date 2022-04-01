import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemandesService {
  demandes: any;
  path ="http://localhost:3306";

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
 

  postDemande(data: any) {
    return this.http.post<any>(this.path + "/demandes", data);
  }
  getAllDemande() {
    return this.http.get<any>(this.path + "/demandes");
  }
  updateDemande(data: any, id: number) {
    return this.http.put<any>(this.path + "/demandes/" + id, data);
  }
  deleteDemande(id: number) {
    return this.http.delete<any>(this.path + "/demandes/"+ id);
  }
}
