import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  response: any;

  menu:any[]=[{
      title: "Dashboard",
      icon: "",
      link: "/home/dashboard",
      submenu:[]
    },
    {
      title: "Cierre Pedidos WOE",
      icon: "",
      link: "/home/cierrePedidos",
      submenu: []
    },{
      title: "Articulos",
      icon: "",
      link: "",
      submenu: [
        {nombre: "Articulos Woe", icon: "", link:"/home/products"},
        {nombre: "Articulos Eliminados Woe", icon: "", link:"/home/productsDelete"},
        {nombre: "Ofertas WAO", icon: "", link:"/home/offers"}
      ]
    }
  ]

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
