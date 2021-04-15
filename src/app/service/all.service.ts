import { Injectable } from '@angular/core';

@Injectable()
    export class bibliotecaService {

        private tarjetas:tarjeta[] =[
                {
                    idx: 0,
                    nombre: "Don't Starve",
                    bio: "Don’t Starve is an uncompromising wilderness survival game full of science and magic. Enter a strange and unexplored world full of strange creatures, dangers, and surprises. Gather resources to craft items and structures that match your survival style.",
                    img: "assets/img/dontStarve.jpg",
                    fecha: "2013-05-01",
                    tipo: "video-game"                  
                },
                {
                    idx: 1,
                    nombre: "It (eso)",
                    bio: "It es una novela de terror publicada en 1986 por el escritor estadounidense Stephen King. Cuenta la historia de un grupo de siete niños que son aterrorizados por un malvado monstruo al que llaman «Eso» que es capaz de cambiar de forma, alimentándose del terror que produce en sus víctimas.",
                    img: "assets/img/it.jpg",
                    fecha: "1986-05-01",
                    tipo: "book"
                },
                {
                    idx: 2,
                    nombre: "Mazas y Catapultas",
                    bio: "“Es una canción que yo creo que es surrealista por el hecho de que rasga la realidad del oyente que no espera eso de Kase.O, y también lo es para mí, porque yo nunca había concebido hacer esta canción y salió de la nada. Además es muy bonita porque es una historia real y por eso la incluí en el disco. ”",
                    img: "assets/img/kaseo.jpg",
                    fecha: "2013-05-01",
                    tipo: "music"
                },
                {
                    idx: 3,
                    nombre: "Don't Starve Shipwrecked",
                    bio: "Don't Starve: Shipwrecked, Wilson finds himself stranded in a tropical archipelago. He must learn to survive all over again in this new environment filled with new biomes, seasons, and creatures.",
                    img: "assets/img/shipwrecked.jpg",
                    fecha: "2013-05-01",
                    tipo: "video-game"
                },
                {
                    idx: 4,
                    nombre: "Oxygen Not Included",
                    bio: "Oxygen Not Included is a space-colony simulation game. Deep inside an alien space rock your industrious crew will need to master science, overcome strange new lifeforms, and harness incredible space tech to survive, and possibly, thrive.",
                    img: "assets/img/Oxygen.png",
                    fecha: "2013-05-01",
                    tipo: "video-game"
                },
                {
                    idx: 5,
                    nombre: "La chica del tren",
                    bio: "La chica del tren​ es una novela de intriga y misterio de la autora británica Paula Hawkins, publicada en 2015, que se convirtió en un superventas en Gran Bretaña, Estados Unidos y Uruguay desde su publicación, y de la que se vendieron cinco millones de ejemplares en seis meses, permaneciendo 20 semanas en la lista de los libros más vendidos del New York Times.",
                    img: "assets/img/tren.jpg",
                    fecha: "2013-05-01",
                    tipo: "book"
                },
                {
                    idx: 6,
                    nombre: "The chain (fleetwood mac)",
                    bio: "The Chain es una canción de la banda británico-estadounidense Fleetwood Mac, publicada en 1977 como parte de su undécimo álbum de estudio, Rumours.​ Es la única canción del álbum acreditada a los cinco miembros (Lindsey Buckingham, Mick Fleetwood, Christine McVie, John McVie y Stevie Nicks).",
                    img: "assets/img/chain.jpg",
                    fecha: "1976-05-01",
                    tipo: "music"
                }
        ];




        constructor() { }


        buscarTarjeta(termino:string):tarjeta[]{
            let tarjetaArr: tarjeta[] = [];
            termino = termino.toLowerCase();
            for(let t of this.tarjetas){
              let nombre = t.nombre.toLowerCase();
              if( nombre.indexOf( termino )>=0 ){
                tarjetaArr.push( t )   
              }
            }
            return tarjetaArr;
        }

        getTarjetas():tarjeta[]{
            return this.tarjetas;
        }

        getTarjeta( idx: number){
            return this.tarjetas[idx];
          }
       

    }

    export interface tarjeta{         
        idx: number;
        nombre: string;    
        bio: string;
        img: string;
        fecha: string;
        tipo: string;
    }