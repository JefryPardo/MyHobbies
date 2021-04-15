import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { bibliotecaService } from './service/all.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { InfoTarjetaComponent } from './component/info-tarjeta/info-tarjeta.component';

//Se requiere para las rutas
import { APP_ROUTING } from './app.routes';
import { MasTarjetaComponent } from './component/mas-tarjeta/mas-tarjeta.component';
import { MusicComponent } from './component/music/music.component';
import { BookComponent } from './component/book/book.component';
import { VideoGameComponent } from './component/video-game/video-game.component';
import { FiltroComponent } from './component/filtro/filtro.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InfoTarjetaComponent,
    MasTarjetaComponent,
    MusicComponent,
    BookComponent,
    VideoGameComponent,
    FiltroComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    bibliotecaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
