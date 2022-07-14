import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/productModel';

/**
 * Servicio ProductService.
 * 
 * Aqui conectaremos a la API a todos los endpoints: POST, GET, PUT...
 * Conectaremos con 2 tipo de Enpoints, Productos y Productos Borrados
 * @example
 * /api/products
 * /api/productsdelete
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  /** Guardamos la informacion de los Endpoint */
  response!: any; 
  /**
   * Constructor, recibe como parametro el HttpClient
   * para hacer los HTTP Requests
   * @param {HttpClient} http 
   */
  constructor(private http: HttpClient) { }
  
  /**
   * Metodo que conecta con el endpoint /api/products/codigo
   * para obtener la lista de productos
   * @param {Product} data
   * @returns Objeto de Productos
   */
  getProduct(product: Product) {
      const { codigoarticulo, anio, campania } = product;
      let params = new HttpParams().set('anio', anio).set('campania', campania);
      return this.http.get(`${environment.SERVER_TW}/api/products/${codigoarticulo}`, {params: params})
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }

  /**
   * Metodo que conecta con /api/products/id
   * para eliminar el articulo seleccionado
   * @param {any} data 
   * @returns {String} Mensaje Success
   */
  deleteProduct(data:any){
    let id = data.ID;
    return this.http.delete(`${environment.SERVER_TW}/api/products/${id}`)
    .pipe(
      map(
        resp => {
          this.response = resp;
          return resp;
        }
      )
    ); 
  }
  // Productos Desactivados/eliminados
  getProductsDelete(data:any){
    const {anio, campania} = data;
    let params = new HttpParams().set('anio', anio).set('campania', campania);
    return this.http.get(`${environment.SERVER_TW}/api/productsdelete`, {params: params})
    .pipe(
      map(
        resp => {
          this.response = resp;
          return resp;
        }
      )
    );

  }

  // Activar codigos
  postActivarCodigo(data:any){
    return this.http.post(`${environment.SERVER_TW}/api/productsdelete`, data)
            .pipe(
              map(
                resp => {
                  this.response = resp;
                  return resp;
                }
              )
            );
  }

}
