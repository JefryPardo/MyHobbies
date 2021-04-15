import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { bibliotecaService } from '../../service/all.service';


@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html'
})
export class FiltroComponent implements OnInit {
  
  tarjeta:any[] = [];
  termino:string = "";

  constructor(private activatedRoute:ActivatedRoute, private heroeSer:bibliotecaService, private rutas:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.tarjeta = this.heroeSer.buscarTarjeta( this.termino );
      console.log( this.tarjeta );
    })
  }
  
  

}
