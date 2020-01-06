import { Component, OnInit } from '@angular/core';
import { Wydatek } from '../wydatek';
import { WydatkiService } from '../lista-wydatkow.service';
import { Router } from '@angular/router';

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

 constructor(private wydatkiService: WydatkiService, private router: Router) { }

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
  
  }

}