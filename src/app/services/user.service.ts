import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuarioModel';
import { map, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  response!: any;

  constructor(private http: HttpClient, private cookie: CookieService) { }
  
  // authUser
  authUser (user: UsuarioModel) {
    const userData = {
      ...user
    };
    return this.http.post('http://localhost:8081/api/auth', userData)
      .pipe(
        map( resp => {
          this.response = resp
          this.setCookie(); // guardamos los datos de sesion
          console.log(this.response.msg);
          return resp
        })
      );


  }// en authUser

  // Set datos de sesion
  setCookie(){
      this.cookie.set(
        "session_id", this.response.session_id, 
        {"expires": new Date(this.response.cookies.expires)});
  } 

  isAuth(): boolean{
    console.log(this.cookie.get('session_id'));
    if(this.cookie.get('session_id')){
      return true;
    }
    
    return false;
  }

}
