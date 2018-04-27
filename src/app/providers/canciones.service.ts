import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CancionesService {

  constructor(private http: HttpClient) {
    console.log('CancionesService.constructor()');
  }

  /**
   * Devuelve todas las canciones de BD
   */
  getAll(): Observable<any> {
    const url = GLOBAL.END_POINT + 'cancion/';
    console.log(`CancionesService.getAll() from ${url}`);

    return this.http.get(url);
  }

}
