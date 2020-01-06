import { Injectable } from '@angular/core';
import { Wydatek, KATEGORIE } from './wydatek';

@Injectable()
export class WydatkiService {

  private wydatki: Wydatek[];
  private nextId: number;
  

  constructor() {
      this.wydatki = [
      new Wydatek(1, 'Tankowanie', 252.43, '', new Date(2018, 4, 30), 527.5, 48),
      new Wydatek(2, 'Myjnia', 75, '', new Date(2018, 4, 2)),
      new Wydatek(3, 'Serwis', 1250, 'Klocki, rozrząd i parę drobiazgów', new Date(2018, 3, 16)),
      new Wydatek(4, 'Inne', 315.50, 'Różowe futerko na kierownicę', new Date(2018, 3, 16),null,25),
      new Wydatek(5, 'Tankowanie', 325.20, 'Do pełna po urlopie', new Date(2017, 7, 12), 527),
      new Wydatek(6, 'Tankowanie', 257.30, '', new Date(2017, 7, 13), null, 35)
    ]; 
    this.nextId = 7;
  }
    getWydatki() {
    return this.wydatki;
  }
  
   getKategorie(): string[] {
    return KATEGORIE;
  }
  dodajWydatek(nowyWydatek: Wydatek): void {
    this.wydatki.push(nowyWydatek);
    nowyWydatek.id = this.nextId++;
    
  }
    usunWydatek(id: number): void {
    const ind = this.wydatki.findIndex(wydatek => wydatek.id === id);
    this.wydatki.splice(ind, 1);
  }
  getSuma(): number {
    var zmienna = 0.00;
  
    this.wydatki.forEach(function(x){
      zmienna = zmienna + x.kwota;
    });
    return zmienna;

  }
  getSuma_tank(): number {  
    var zmienna_tank = 0.00;

    this.wydatki.forEach(function(x){
      if (x.kategoria == "Tankowanie"){
        zmienna_tank = zmienna_tank + x.kwota;
        }
    });
    return zmienna_tank;
  } 
  getSuma_myj(): number {
    var zmienna_myj = 0.00;

    this.wydatki.forEach(function(x){
       if (x.kategoria == "Myjnia"){
        zmienna_myj = zmienna_myj + x.kwota;
      }
    });
    return zmienna_myj;
  }
  getSuma_serwis(): number {  
    var zmienna_serwis = 0.00;

    this.wydatki.forEach(function(x){
      if (x.kategoria == "Serwis"){
        zmienna_serwis = zmienna_serwis + x.kwota;
        }
    });
    return zmienna_serwis;
  } 
  getSuma_inne():number{
    var zmienna_inne = 0.00;

    this.wydatki.forEach(function(x){
       if (x.kategoria == "Inne"){
        zmienna_inne = zmienna_inne + x.kwota;
      }
    });
    return zmienna_inne;
  }
  getTab(){
  var tab = [];
  tab = [this.suma_tank,this.suma_myj, this.suma_serwis, this.suma_inne];
  }
  
}