import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  peliculasTop: any[] = [];

  constructor(private peliculasService: PeliculasService){}
  
  ngOnInit(): void{
    this.peliculasService.getPeliculasTop().subscribe(peliculas => {
      this.peliculasTop = peliculas;
    })
  }

}
