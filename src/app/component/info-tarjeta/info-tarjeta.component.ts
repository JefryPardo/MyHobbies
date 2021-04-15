//Librerias requeridas
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-info-tarjeta',
  templateUrl: './info-tarjeta.component.html'
})




export class InfoTarjetaComponent implements OnInit {
  
  @Input() tarjeta:any = {};
  @Input() index: number = 0;

  constructor(private rutas:Router) {}
  ngOnInit(): void {}


  verTarjeta(idx: number){
    this.rutas.navigate(['/mas', idx]);
  }



}
