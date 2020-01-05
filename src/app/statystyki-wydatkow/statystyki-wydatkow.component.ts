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
 constructor(private wydatkiService: WydatkiService, private router: Router) { }

  ngOnInit() {
    
  this.nowyWydatek = new Wydatek;
  this.kategorie = this.wydatkiService.getKategorie();
  this.wydatki = this.wydatkiService.getWydatki();
  this.suma = this.wydatkiService.getSuma();
  }
 


}