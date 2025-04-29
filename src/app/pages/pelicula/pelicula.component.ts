import { Component } from '@angular/core';
import { Pelicula } from '../../types/peliculas';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {

  pelicula: Pelicula | undefined;
  //peliculaId: number= 0;

  constructor(private activatedRoute: ActivatedRoute, private pelicualService: PeliculasService){}

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      const id = params ['id'];
      this.pelicualService.getPelicula(id).subscribe(pelicula =>  {
        this.pelicula = pelicula;
      });
      //this.peliculaId = params['id'];
    })
  }
  goToPeliculas(){
    
  }

}
