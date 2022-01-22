import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CierrePedidos } from '../models/cierrePedidosInterface';

/**
 * Servicio CierrePedidosService.
 * 
 * Aqui conectaremos a la API a todos los endpoints: POST, GET, PUT...
 * 
 * @example
 * /api/cierrepedidos
 */
@Injectable({
  providedIn: 'root'
})
export class CierrePedidosService {
  /** Guardamos la informacion de los Endpoint */
  respone!: any;
  /**
   * Constructor, recibe como parametro el HttpClient
   * para hacer los HTTP Requests
   * @param http 
   */
  constructor(private http: HttpClient) { }

  /**
   * Aqui llamaremos al Endpoint /api/cierrepedidos
   * para actualizar la fecha de cierre de pedidos
   * en WOE. El Endpoint genera una archivo de interfaz
   * y el Gestor de Interfaces ejecuta el Store Procedure
   * que hace la actualizacion
   * @param {CierrePedidos} cierrePedidos 
   * @returns 
   */
  cierrePedidos(cierrePedidos: CierrePedidos){
    const data = {
      ...cierrePedidos
    };

    return this.http.post('http://localhost:8081/api/cierrepedidos', data).pipe(
      map(
        resp => {
          this.respone = resp;
          return resp;
        }
      )
    );
  }


}
