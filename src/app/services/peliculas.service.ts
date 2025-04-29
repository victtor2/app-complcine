import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../types/peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  
  private url = 'https://api.sampleapis.com/movies/comedy';

  constructor(private http: HttpClient) { }

  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.url);
  }

  getPelicula(id: number): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${this.url}/${id}`);
  }
}
