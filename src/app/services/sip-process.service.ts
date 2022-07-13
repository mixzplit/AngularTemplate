import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { UsuarioModel } from '../models/usuarioModel';

@Injectable({
  providedIn: 'root'
})
export class SipProcessService {

  constructor(private http: HttpClient) { }
  
  /**
   * Obtener el ultimo ID de usuario disponible para usar
   * @returns userid
   */
  getMaxIdUser(){
    return this.http.get(`${environment.SERVER_TW}/api/sipservices/maxid`).pipe(
      map(resp => {
        return resp;
      })
    )
  }
  
  getUsuarios(){
    return this.http.get(`${environment.SERVER_TW}/api/sipservices`).pipe(
      map(resp => {
        return resp;
      }));
  
  }

  createUsuario(users: any){
    console.log(users);
    return this.http.post(`${environment.SERVER_TW}/api/sipservices/`, users)
          .pipe( 
            map( resp => {
              return resp;
            }) 
          );
  }
  
  deleteUsuario(userid: number){
    return this.http.delete(`${environment.SERVER_TW}/api/sipservices/${userid}`);
  }

  putUsuario(user: UsuarioModel){
    const { userid } = user;   
    const userData = {
      ...user
    }
    console.log(userData);
    return this.http.put(`${environment.SERVER_TW}/api/sipservices/${userid}`, userData );
  }
  
  /**
   * 
   * @param users 
   * @returns 
   */
  createGerenteZona(users: any){
    console.log(users);
    return this.http.post(`${environment.SERVER_TW}/api/sipservices/ngerentezona`, users)
          .pipe( 
            map( resp => {
              return resp;
            }) 
          );
  }

  getGerentesZona(){
    return this.http.get(`${environment.SERVER_TW}/api/sipservices/gerenteszona`).pipe(
      map(resp => {
        return resp;
      }));
  
  }

}
