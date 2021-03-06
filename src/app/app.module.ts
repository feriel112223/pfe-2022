import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './dashboards/dashboard/dashboard.component';
import { EmloyeeComponent } from './dashboards/emloyee/emloyee.component';
import { DemandesComponent } from './dashboards/demandes/demandes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './dashboards/home/home.component';
import { CalendrierDeTravailComponent } from './dashboards/calendrier-de-travail/calendrier-de-travail.component';

import { ListeCongesComponent } from './dashboards/liste-conges/liste-conges.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import { FicheDePaiesComponent } from './dashboards/fiche-de-paies/fiche-de-paies.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    EmloyeeComponent,
    DemandesComponent,
    HomeComponent,
    CalendrierDeTravailComponent,
    ListeCongesComponent,
    FicheDePaiesComponent,
    
    
  
  ],

  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
