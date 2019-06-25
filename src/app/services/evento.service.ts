import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  token: string = 'ROUFBQIAS2OLLKIFB4XN';
  url: string = 'https://www.eventbriteapi.com/v3';
  orden: string = 'date';

  constructor(
    private http: HttpClient
  ) { }

  getCategorias(): Observable<Object> {
    return this.http.get(`${this.url}/categories/?token=${this.token}&locale=es_ES`);
  }

  getEventos(nombre: string, categoria: string): Observable<Object> {
    return this.http.get(`${this.url}/events/search/?q=${nombre}&categories=${categoria}&sort_by=${this.orden}&token=${this.token}&locale=es_ES`);
  }

}
