import { Component, OnInit } from '@angular/core';
import { bibliotecaService} from '../../service/all.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  
  tarjetas:any = [];

  constructor(private _TarjetaService:bibliotecaService) { }

  ngOnInit(): void {
    this.tarjetas = this._TarjetaService.getTarjetas(); 
    console.log(this.tarjetas );
  }

}
