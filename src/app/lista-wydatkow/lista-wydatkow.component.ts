import { Component, OnInit } from '@angular/core';
import { WydatkiService } from '../lista-wydatkow.service';

@Component({
  selector: 'app-lista-wydatkow',
  templateUrl: './lista-wydatkow.component.html',
  styleUrls: ['./lista-wydatkow.component.css']
})
export class ListaWydatkowComponent implements OnInit {
wydatki: any;

 constructor(private wydatkiService: WydatkiService) { }
    ngOnInit() {
    this.wydatki = this.wydatkiService.getWydatki();
  }

}