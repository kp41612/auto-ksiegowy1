import { Component, OnInit } from '@angular/core';
import { Wydatek, Statystyka } from '../wydatek';
import { WydatkiService } from '../lista-wydatkow.service';
import { Router } from '@angular/router';
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-statystyki-wydatkow',
  templateUrl: './statystyki-wydatkow.component.html',
  styleUrls: ['./statystyki-wydatkow.component.css']
})
export class StatystykiWydatkowComponent implements OnInit {
kwota: number;
kategorie: string[];
nowyWydatek: Wydatek;
wydatki: any;
suma: number;
suma_tank: number;
suma_myj: number;
suma_serwis: number;
suma_inne: number;
tab = [];
statystyki: Statystyka [];
przelacznik: number;
 constructor(private wydatkiService: WydatkiService, private router: Router) {
   this.przelacznik = 0;
  }
oblicz_kwote(kategoria: String): number{
  var dateOut = new Date();
  var n = dateOut.getMonth();

  var suma = 0;
  var datawydatku;
  const format = 'yyyy/MM/dd';
  const locale = 'en-US';
  
  this.wydatki.forEach(function(x){
    
  datawydatku = x.data;
  const formattedDate = formatDate(datawydatku, format, locale);
  datawydatku = new Date(formattedDate);
  datawydatku = datawydatku.getMonth();
 
  if( n == datawydatku ){
    if(x.kategoria==kategoria){
    suma = suma + x.kwota;
    }
  }
  });
  return suma;
}
przelacz(): void {
   

  
    if(this.przelacznik == 0) {
    this.statystyki = [
      new Statystyka('Tankowanie',this.oblicz_kwote('Tankowanie')),
      new Statystyka('Myjnia',this.oblicz_kwote('Myjnia')),
      new Statystyka('Serwis',this.oblicz_kwote('Serwis')),
      new Statystyka('Inne',this.oblicz_kwote('Inne')),
      // new Statystyka('Tankowanie',this.wydatkiService.getSuma_tank()),
      // new Statystyka('Myjnia',this.wydatkiService.getSuma_myj()),
      // new Statystyka('Serwis',this.wydatkiService.getSuma_serwis()),
      // new Statystyka('Inne',this.wydatkiService.getSuma_inne()),
      
    ]; 
    }
    else {
    this.statystyki = [
      new Statystyka('Tankowanie',this.wydatkiService.getSuma_tank()),
      new Statystyka('Myjnia',this.wydatkiService.getSuma_myj()),
      new Statystyka('Serwis',this.wydatkiService.getSuma_serwis()),
      new Statystyka('Inne',this.wydatkiService.getSuma_inne()),
      
    ];
    }
     if (this.przelacznik == 0 ){
       this.przelacznik = 1;
     }
     else {
       this.przelacznik = 0;
     }
  }
  ngOnInit() {
   
  this.nowyWydatek = new Wydatek(null,null,null,null);
  this.kategorie = this.wydatkiService.getKategorie();
  this.wydatki = this.wydatkiService.getWydatki();
  this.suma = this.wydatkiService.getSuma();
  this.suma_tank = this.wydatkiService.getSuma_tank();
  this.suma_myj = this.wydatkiService.getSuma_myj();
  this.suma_serwis = this.wydatkiService.getSuma_serwis();
  this.suma_inne = this.wydatkiService.getSuma_inne();
  this.tab = [this.suma_tank, this.suma_myj, this.suma_serwis, this.suma_inne];
  this.przelacz();
  }

}