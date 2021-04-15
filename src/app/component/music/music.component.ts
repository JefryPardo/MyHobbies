import { Component, OnInit } from '@angular/core';
import { bibliotecaService} from '../../service/all.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html'
})
export class MusicComponent implements OnInit {
  tarjetas:any = [];
  constructor(private _TarjetaService:bibliotecaService) { }

  ngOnInit(): void {
    this.tarjetas = this._TarjetaService.getTarjetas();
  }

}
