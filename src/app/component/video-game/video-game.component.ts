import { Component, OnInit } from '@angular/core';
import { bibliotecaService} from '../../service/all.service';

@Component({
  selector: 'app-video-game',
  templateUrl: './video-game.component.html'
})
export class VideoGameComponent implements OnInit {
  tarjetas:any = [];
  constructor(private _TarjetaService:bibliotecaService) { }

  ngOnInit(): void {
    this.tarjetas = this._TarjetaService.getTarjetas();
  }

}
