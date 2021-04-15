import { Component, OnInit } from '@angular/core';
import { bibliotecaService} from '../../service/all.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
  tarjetas:any = [];
  constructor(private _TarjetaService:bibliotecaService) { }

  ngOnInit(): void {
    this.tarjetas = this._TarjetaService.getTarjetas(); 
    console.log(this.tarjetas);
  }

}
