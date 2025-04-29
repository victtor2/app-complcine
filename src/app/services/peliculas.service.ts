import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../types/peliculas';
import { collection, collectionData, doc, Firestore, limit, orderBy, query, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  
  private url = 'https://api.sampleapis.com/movies/comedy';

  constructor(private http: HttpClient, private firestore: Firestore) { }

  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.url);
  }

  getPelicula(id: number): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${this.url}/${id}`);
  }

  getPeliculasTop(): Observable<any[]>{
    const peliculasRef = collection(this.firestore, 'peliculas');
    const q = query(peliculasRef, orderBy('puntuacion', 'desc'), limit(2));
    return collectionData(q, { idField: 'id' });
  }

  //CARGAR PELICULAS A FIREBASE
  //loadPeliculasToFirebase(){
  // this.getPeliculas().subscribe(peliculas => {
  //    peliculas.forEach(pelicula => {
  //      const peliculaRef = doc(this.firestore, "peliculas", pelicula.id.toString());
  //      setDoc(peliculaRef, pelicula);
  //    })
  //  });
  //}
}
