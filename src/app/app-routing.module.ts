import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { ResetpasswordComponent } from './Auth/resetpassword/resetpassword.component';
import { CalendrierDeTravailComponent } from './dashboards/calendrier-de-travail/calendrier-de-travail.component';
import { ClockComponent } from './dashboards/clock/clock.component';
import { DashboardComponent } from './dashboards/dashboard/dashboard.component';
import { DemandesComponent } from './dashboards/demandes/demandes.component';
import { EmloyeeComponent } from './dashboards/emloyee/emloyee.component';
import { FicheDePaiesComponent } from './dashboards/fiche-de-paies/fiche-de-paies.component';
import { HomeComponent } from './dashboards/home/home.component';
import { ListeCongesComponent } from './dashboards/liste-conges/liste-conges.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const routes: Routes = [
  {path:"",redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent}, 
  {path:'mot_de_passe_oublie' , component:ResetpasswordComponent}, 

  
  { path:'home',component:HomeComponent,
  children:[
    {path:'tableau_de_bord',component:DashboardComponent},
    {path:'demandes',component:DemandesComponent},
    {path:'employee',component:EmloyeeComponent},
    {path:'calendrier_de_travail',component:CalendrierDeTravailComponent},
    {path:'liste_des_conges',component:ListeCongesComponent},
    {path:'fiche_de_paies',component:FicheDePaiesComponent},
    {path:'clock',component:ClockComponent}
    
  ],
},
    
  
    
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
