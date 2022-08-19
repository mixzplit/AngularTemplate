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

  /**
   * Revisamos los roles del usuario con
   * los permisos de acceso del menu en la
   * propiedad "role" de la ruta.
   * Usamos la validacion como la directiva de permisos
   * que muestra o no el menu en la vista
   * @param route 
   * @returns 
   */
  chekUserLogin(route: ActivatedRouteSnapshot): boolean{
    let hasPermission = false;
    this.respUserInfo = this.auth.infoUser();
    
    // Recorremos la propiedad "role" del app.routing    
    for(const permission of route.data["role"]){
      // Buscamos el permiso del usuario y comparamos con el permiso de la ruta
      const permissionFound = this.respUserInfo.rol.find((p:string) => {
        return p === permission  
      });
      
      if(permissionFound){
        hasPermission =  true;
      }
    }

    return hasPermission
    
  }

}
