import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

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
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.auth.getCookie()){
      window.location.reload();
    }
    return this.chekUserLogin(route);
  } 
  
  chekUserLogin(route: ActivatedRouteSnapshot): boolean{
     this.respUserInfo = this.auth.infoUser();

    if(route.data["role"].includes(this.respUserInfo.rol)){
      return true;
    }else{
      return false;
    }

  }

}
