import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  response: any;
  /**
   * variable que nos permitira obtener
   * la informacion del menu desde cualquier
   * componente
   */
  menu:EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  getMenu(){
    return this.http.get(`${environment.SERVER_TW}/api/menus`).pipe(
      map( resp => {
        this.response = resp
        //console.log(resp);
        return resp;
      })
    )
  }

  getSubMenu(){
    let params = new HttpParams().set('smenu', true);

    return this.http.get(`${environment.SERVER_TW}/api/menus`, {params: params}).pipe(
      map( resp => {
        this.response = resp
        //console.log(resp);
        return resp;
      })
    )
  }


}
