import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Cancion } from '../model/cancion';

@Injectable()
export class CancionesService {

  constructor(private http: HttpClient) {
    console.log('CancionesService.constructor()');
  }

  /**
   * SELECT ALL de todas las canciones de BD
   */
  getAll(): Observable<any> {
    const url = GLOBAL.END_POINT + 'cancion/';
    console.log(`CancionesService.getAll() from ${url}`);

    return this.http.get(url);
  }

  /**
   * INSERT de nueva canción en BD
   * @param titulo : título de la nueva canción
   */
  add(titulo: string): Observable<any> {
    const url = GLOBAL.END_POINT + 'cancion/';
    console.log(`CancionesService.add() from ${url}`);
    const body = {'nombre': titulo};
    // const headers = new Headers({ 'Content-Type': 'application/json' });
    // const options = new RequestOptions({ headers: headers });

    return this.http.post(url, body, /* options */);
  }

  /**
   * UPDATE de la canción a traves de su id
   * @param cancion : canción con su id de BD y nuevo título
   */
  modify(cancion: Cancion): Observable<any> {
    const url = GLOBAL.END_POINT + 'cancion/' + cancion.id;
    console.log(`CancionesService.modify( ${cancion} ) from ${url}`);

    return this.http.put(url, cancion);
  }

  /**
   * DELETE canción por id
   * @param id : id de la canción en BD
   */
  delete(id: number): Observable<any> {
    const url = GLOBAL.END_POINT + 'cancion/' + id;
    console.log(`CancionesService.delete(id) from ${url}`);

    return this.http.delete(url);
  }

}
