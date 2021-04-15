import { Component } from '@angular/core';

//Para tomar id del enlace
import { ActivatedRoute } from '@angular/router';
import { bibliotecaService } from '../../service/all.service';


@Component({
  selector: 'app-mas-tarjeta',
  templateUrl: './mas-tarjeta.component.html'
})



export class MasTarjetaComponent{
  tarjeta:any = {};

  constructor( private activaedRoute: ActivatedRoute, private _tarjetaService: bibliotecaService) { 
      this.activaedRoute.params.subscribe( params => {
        this.tarjeta = this._tarjetaService.getTarjeta( params['idx'] );
    })
  }
}
