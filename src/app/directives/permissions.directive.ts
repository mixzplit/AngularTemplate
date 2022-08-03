import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';

@Directive({
  selector: '[appPermissions]'
})
export class PermissionsDirective implements OnInit{
  private permissions: any[] = [];
  private currentUser: any;
    
  constructor(private templateRef: TemplateRef<any>, 
              private viewContainer: ViewContainerRef,
              private user: UserService) { }


  ngOnInit(): void {
    this.currentUser = this.user.infoUser();
    this.updateView();

  }

  @Input()
  set appPermissions(val: string[]){
    //console.log('*** PERMISOS *** ', val);
    this.permissions = val;
    this.updateView();
  }

  /**
   * Actualizamos la vista,
   * el elemento HTML
   */
  private updateView(): void {
    this.viewContainer.clear();
    if(this.checkPermission()){ // true or false
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  /**
   * Validamos los permisos del usuarios con
   * los roles permitidos del menu
   * @returns true or false
   */
  private checkPermission(): boolean {
    let hasPermission = false;
    if(this.currentUser && this.currentUser.rol){
      TODO:// recorremos los permisos del menu (roles permitidos para ver el menu) 
      // y luego lo vamos a comparar con los permisos (roles) del usuario
      for(const checkPermission of this.permissions){
        // validamos roles
        const permissionFound = checkPermission.includes(this.currentUser.rol.substring(3,this.currentUser.rol.length));

        console.log('FOUND:', permissionFound);  
        // validamos si encontro el permiso
        if(permissionFound){
          console.log('Puede ver menu: ', permissionFound);
          hasPermission = true;
          //break;  // rompemos el ciclo
        }

      }
    }
    return hasPermission
  }  

}
