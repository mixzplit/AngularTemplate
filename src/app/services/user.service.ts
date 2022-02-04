import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuarioModel';
import { map, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

/**
 * Servicio UserService.
 * 
 * Aqui conectaremos a la API a todos los endpoints: POST, GET, PUT
 * 
 * @example
 * /api/auth
 * /api/sessions
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
  /** Guardamos la informacion de los Endpoint */
  response!: any;
  /**
   * Constructor, recibe como parametro el HttpClient
   * para hacer los HTTP Requests y CookieService para
   * trabajar con cookies
   * @param {HttpClient} http 
   * @param {CookieService} cookie 
   */
  constructor(private http: HttpClient, private cookie: CookieService) { }
  
  /**
   * Metodo que conecta con el endpoint /api/auth
   * y valida las credenciales del usuario en LDAP Server
   * @param {UsuarioModel} user 
   * @returns Devuelve un ID de sesion que sera seteado como Cookie
   */
  authUser (user: UsuarioModel) {
    const userData = {
      ...user
    };
    return this.http.post(`${environment.SERVER_TW}/api/auth`, userData)
      .pipe(
        map( resp => {
          this.response = resp
          this.setCookie(); // guardamos los datos de sesion
          console.log(this.response.msg);
          return resp
        })
      );
  }// end authUser

  /**
   * Metodo que obtiene la informacion del usuario de la cookie
   * generada al iniciar sesion
   * @returns Un objeto con la informacion del usuario
   */
  infoUser(): object{
    this.response = JSON.parse(this.getCookie());
    return this.response.data;
  }

  /**
   * En este metodo validamos desde el
   * GUARD si el usuario esta autenticado
   * o no para ver las Routes
   * @returns Boolean
   */
  isAuth(): boolean{
    //console.log(this.cookie.get('session_id'));
    if(this.cookie.get('session_id')){
      return true;
    }
    return false;
  }

  /**
   * Metodo que setea el id session al momento de autenticar el usuario.
   */
  setCookie(){
      this.cookie.set(
        "session_id", JSON.stringify(this.response), 
        {"expires": new Date(this.response.data.cookie.expires)}
      );
  } 
  /** Metodo que obtiene la cookie de nombre "session_id" */
  getCookie(){
    return this.cookie.get('session_id');
  }
  
}
