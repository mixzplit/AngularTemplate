import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UserService } from '../services/user.service';

/**
 * Auth Guard
 * 
 * La aplicacion validara siempre este GUARD para verificar si el usuario puede acceder
 * a las rutas o menus
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/
  
  /**
   * Constructor, recibe como parametro el servicio UserServices
   * para validar el usuario y el servicio de rutas Router
   * @param {UserService} auth 
   * @param {Router} router 
   */
  constructor( private auth: UserService, private router: Router ){}
  /**
   * Este metodo valida si el usuario esta autenticado
   * para navegar por las rutas de la aplicacion
   * @returns True o False
   */
  canActivate(): boolean {
    if ( this.auth.isAuth() ){
      return true;
    }else{
       this.router.navigateByUrl('/');
       return false;
    }
  }  
  
}
