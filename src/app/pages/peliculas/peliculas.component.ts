import { Component } from '@angular/core';

import { Pelicula } from '../../types/peliculas';
import { title } from 'process';
import { Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {

  peliculas: Pelicula[] = [];

  constructor(
      private router: Router,
      private peliculasService: PeliculasService
    ){}

  ngOnInit(){
    this.getPeliculas();
    //this.peliculasService.loadPeliculasToFirebase();
  }
  
  goToPelicula(id: number){
    //console.log('Pelicula id: ', id);
    this.router.navigate(['peliculas', id]);
  }

  getPeliculas(){
    this.peliculasService.getPeliculas().subscribe(peliculas => {
      this.peliculas = peliculas;
    })
  }
}
