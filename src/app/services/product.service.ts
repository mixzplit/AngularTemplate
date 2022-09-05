import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
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
  
  //TODO:Ejemplo para el uso de Redux NgRX
  getStaticData(): Observable<any> {

    const data = [
      {
          "ID": 1234568,
          "ANIO": 2022,
          "CAMPANIA": 10,
          "CODIGOARTICULO": 620345,
          "CODIGOFACTURACION": "620345",
          "CORRELATIVO": 620345,
          "NOMBREARTICULO": "CUCHILLO BLANCO 2 EN 1",
          "PRECIOORDEN": 674.25
      },
      {
          "ID": 64394712,
          "ANIO": 2022,
          "CAMPANIA": 10,
          "CODIGOARTICULO": 456201,
          "CODIGOFACTURACION": "456201",
          "CORRELATIVO": 456201,
          "NOMBREARTICULO": "PANQUEQUERA ANTIADHERENTE 18 CM",
          "PRECIOORDEN": 1954.15
      },
      {
          "ID": 64394984,
          "ANIO": 2022,
          "CAMPANIA": 10,
          "CODIGOARTICULO": 665504,
          "CODIGOFACTURACION": "665504",
          "CORRELATIVO": 665504,
          "NOMBREARTICULO": "CF ESM RED CELEBRATION GL 10ML",
          "PRECIOORDEN": 599.25
      },
      {
          "ID": 64394860,
          "ANIO": 2022,
          "CAMPANIA": 10,
          "CODIGOARTICULO": 622265,
          "CODIGOFACTURACION": "622265",
          "CORRELATIVO": 622265,
          "NOMBREARTICULO": "SENSACION BOWL TURQUESA 3LT",
          "PRECIOORDEN": 1874.25
      },
      {
          "ID": 64394921,
          "ANIO": 2022,
          "CAMPANIA": 10,
          "CODIGOARTICULO": 627490,
          "CODIGOFACTURACION": "627490",
          "CORRELATIVO": 627490,
          "NOMBREARTICULO": "APOYO ACTIVIDAD C10-22 B",
          "PRECIOORDEN": 1799
      },
      {
          "ID": 64394854,
          "ANIO": 2022,
          "CAMPANIA": 10,
          "CODIGOARTICULO": 621222,
          "CODIGOFACTURACION": "621222",
          "CORRELATIVO": 621222,
          "NOMBREARTICULO": "BOX VERDE 2,5LT",
          "PRECIOORDEN": 2174.25
      },
      {
          "ID": 64394847,
          "ANIO": 2022,
          "CAMPANIA": 10,
          "CODIGOARTICULO": 620475,
          "CODIGOFACTURACION": "620475",
          "CORRELATIVO": 620475,
          "NOMBREARTICULO": "PRACTIFREEZEE FROZEN AMA 2,5LT",
          "PRECIOORDEN": 2849.25
      },
      {
          "ID": 64394874,
          "ANIO": 2022,
          "CAMPANIA": 10,
          "CODIGOARTICULO": 623299,
          "CODIGOFACTURACION": "623299",
          "CORRELATIVO": 623299,
          "NOMBREARTICULO": "MINI CONTENEDOR LILA 200ML",
          "PRECIOORDEN": 599.25
      },
      {
          "ID": 64394976,
          "ANIO": 2022,
          "CAMPANIA": 10,
          "CODIGOARTICULO": 665289,
          "CODIGOFACTURACION": "665289",
          "CORRELATIVO": 665289,
          "NOMBREARTICULO": "FAM BAS SHA DETOX X 400 ML",
          "PRECIOORDEN": 674.25
      },
      {
          "ID": 64394729,
          "ANIO": 2022,
          "CAMPANIA": 10,
          "CODIGOARTICULO": 461456,
          "CODIGOFACTURACION": "461456",
          "CORRELATIVO": 461456,
          "NOMBREARTICULO": "AIRES FLORALES FUNDA SECARROP",
          "PRECIOORDEN": 1614.15
      },
      {
          "ID": 64394978,
          "ANIO": 2022,
          "CAMPANIA": 10,
          "CODIGOARTICULO": 665327,
          "CODIGOFACTURACION": "665327",
          "CORRELATIVO": 665327,
          "NOMBREARTICULO": "ACC APLICADOR DE MASC DE PESTA",
          "PRECIOORDEN": 299.25
      }
    ]

    return of(data).pipe(
      delay(1500)
    )

  }


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
          console.log("Product Services",resp);
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
  deleteProduct(id:number){
    //let id = data.ID;
    return this.http.delete(`${environment.SERVER_TW}/api/products/${id}`);
    /* return this.http.delete(`${environment.SERVER_TW}/api/products/${id}`)
    .pipe(
      map(
        resp => {
          this.response = resp;
          return resp;
        }
      )
    ); */ 
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
