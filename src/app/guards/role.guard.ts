import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';

/**
 * Role Guard
 * 
 * La aplicacion validara el rol del usuario para dar acceso a las rutas
 */
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  /** Respuesta del Servicio */
  respUserInfo: any;
  /**
   * Constructor, recibe como parametro el servicio UserServices
   * para validar el rol de usuario 
   * @param {UserService} auth 
   */
  constructor( private auth: UserService ){}
  
  /**
   * Este metodo valida si el usuario tiene permisos
   * para acceder a menus especificos
   * @returns True o False
   */
  canActivate(): boolean {
    this.respUserInfo = this.auth.infoUser();
    const [ cn ] = this.respUserInfo.memberOf.split(',')
    if ( cn === 'CN=gadmin' ){
      //console.log(cn);
      return true;
    }else{
       return false;
    }
  } 
  
}
