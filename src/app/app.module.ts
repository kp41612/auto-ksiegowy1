import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaWydatkowComponent } from './lista-wydatkow/lista-wydatkow.component';
import { DodajWydatekComponent } from './dodaj-wydatek/dodaj-wydatek.component';
import {WydatkiService} from './lista-wydatkow.service'

const appRoutes: Routes = [
  { path: 'wydatki', component: ListaWydatkowComponent },
  { path: 'dodaj', component: DodajWydatekComponent },
  { path: '',
    redirectTo: '/wydatki',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, ListaWydatkowComponent, DodajWydatekComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ WydatkiService ]
})
export class AppModule { }
