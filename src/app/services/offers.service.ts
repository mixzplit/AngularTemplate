import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../models/productModel';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { Offer } from '../models/offerModel';

/**
 * Servicio asociado a las ofertas WAO
 */
@Injectable({
  providedIn: 'root'
})
export class OffersService {
  /**
   * @ignore
   * @param http 
   */
  constructor(private http: HttpClient) { }

  /**
   * Obtenemos las ofertas WAO
   * @param offers 
   * @returns 
   */
  getOffers(offers: Offer) {
    const { anio, campania } = offers;
    let params = new HttpParams().set('anio', anio).set('campania', campania);
    return this.http.get(`${environment.SERVER_TW}/api/offers`, {params: params})
    .pipe(
      map(resp => {
        return resp;
      })
    );

  }

}
