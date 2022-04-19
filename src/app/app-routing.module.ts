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
  {path:'mot de passe oublié!' , component:ResetpasswordComponent}, 

  
  { path:'home',component:HomeComponent,
  children:[
    {path:'tableau de bord',component:DashboardComponent},
    {path:'demandes',component:DemandesComponent},
    {path:'employee',component:EmloyeeComponent},
    {path:'calendrier de travail',component:CalendrierDeTravailComponent},
    {path:'liste des conges',component:ListeCongesComponent},
    {path:'fiche de paies',component:FicheDePaiesComponent},
    {path:'clock',component:ClockComponent}
    
  ],
},
    
  
    
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
