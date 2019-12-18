import { Component, OnInit } from '@angular/core';
import { Wydatek } from '../wydatek';
import { WydatkiService } from '../lista-wydatkow.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dodaj-wydatek',
  templateUrl: './dodaj-wydatek.component.html',
  styleUrls: ['./dodaj-wydatek.component.css']
})
export class DodajWydatekComponent implements OnInit {

nowyWydatek: Wydatek;
kategorie: string[];

  constructor(private wydatkiService: WydatkiService, private router: Router) { }

  ngOnInit() {
    this.nowyWydatek = new Wydatek ('Tankowanie',null,null,null);
    this.kategorie = this.wydatkiService.getKategorie();
  }
 onSubmit() {
    this.wydatkiService.dodajWydatek(this.nowyWydatek);
    this.nowyWydatek = new Wydatek(null, 'Tankowanie', null, null, null);
    this.router.navigate(['/wydatki']);
  }
}
