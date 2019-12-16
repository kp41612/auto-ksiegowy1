import { Component, OnInit } from '@angular/core';
import { WydatkiService } from '../lista-wydatkow.service';

@Component({
  selector: 'app-lista-wydatkow',
  templateUrl: './lista-wydatkow.component.html',
  styleUrls: ['./lista-wydatkow.component.css']
})
export class ListaWydatkowComponent implements OnInit {
private wydatki_service: WydatkiService;
wydatki: any;

constructor() {
  this.wydatki_service = new WydatkiService();
 }
    ngOnInit() {
    this.wydatki = this.wydatki_service.getWydatki();
  }

}