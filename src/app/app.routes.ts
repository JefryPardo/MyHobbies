import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MasTarjetaComponent } from './component/mas-tarjeta/mas-tarjeta.component';
import { MusicComponent } from './component/music/music.component';
import { BookComponent } from './component/book/book.component';
import { VideoGameComponent } from './component/video-game/video-game.component';
import { FiltroComponent } from './component/filtro/filtro.component';

//Rutas

const APP_ROUTES: Routes = [
    { path: 'tarjetas', component: HomeComponent },
    { path: 'mas/:idx', component: MasTarjetaComponent },
    { path: 'music', component: MusicComponent },
    { path: 'book', component: BookComponent },
    { path: 'video-game', component: VideoGameComponent },    
    { path: 'buscar/:termino', component: FiltroComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'tarjetas'}
];

//Exporta
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);