import { Component, OnInit } from '@angular/core';
import { faFileAlt, faFireAlt, faOutdent, fas, faTachometerAlt, faThList, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from 'src/app/services/menu.service';
import { RoleGuard } from '../../guards/role.guard';
import { UserService } from '../../services/user.service';
import { faCalendarAlt, faCalendarDays } from '@fortawesome/free-regular-svg-icons';

/**
 * SidebarComponent
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  fas = fas;
  /** FontAwesome Icon para el Sidebar Menu */
  faThList = faThList;
  /** FontAwesome Icon para el Sidebar Menu */
  faTachometerAlt = faTachometerAlt;
  /** FontAwesome Icon para el Sidebar Menu */
  faFileAlt = faFileAlt;
  /** FontAwesome Icon para el Sidebar Menu */
  faOutDent = faOutdent;
  /** FontAwesome Icon para el Sidebar Menu */
  faFireAlt = faFireAlt;
  /** FontAwesome Icon para el Sidebar Menu */
  faUsers = faUsers;
  /** FontAwesome Icon para el Sidebar Menu */
  faUserPlus = faUserPlus;

  /**
   * Variable para manejar los iconos dinamicamente
   * Se agrega el nombre real del icono y no la variable.
   */
  icons: any = {
    faThList,
    faTachometerAlt,
    faFileAlt,
    faOutdent,
    faFireAlt,
    faUsers,
    faUserPlus,
    faCalendarAlt
  }
  
  userResponse: any;
  userRole: string = '';

  menuResponse: any;
  subMenuReponse: any;
  // Variables para evitar undefined en la vista
  // Se inicializa en false y sera true solo cuando
  // el menu y submenu  respectivamente ya este cargado
  // y listo para renderizar
  menuItemsLoad: boolean = false;
  subMenuItemsLoad: boolean = false;

  /**
   * Constructor, recibe el RoleGuard para validar el acceso 
   * a menus segun el rol del usuario
   * @param roleGuard 
   */
  constructor(public roleGuard: RoleGuard, private user: UserService, private menu: MenuService) { }
  
  /**
   * @ignore
   */
  ngOnInit(): void {
    this.getPermission();
    this.getMenu();
    this.getSubMenu();

    this.icons;

  }
  
  getPermission(): string {
    this.userResponse = this.user.infoUser();
    return this.userRole = this.userResponse.rol;
  }

  getMenu(){
    this.menu.getMenu().subscribe({
        next: (resp) => {
          this.menuResponse = resp;
          //console.log(this.menuResponse);
          this.menuItemsLoad = true;
        },
        error: (err) => {
          console.log(err);
        }
    })
  }

  getSubMenu(){
    this.menu.getSubMenu().subscribe({
        next: (resp) => {
          this.subMenuReponse = resp;
          //console.log(this.subMenuReponse);
          this.subMenuItemsLoad = true;
        },
        error: (err) => {
          console.log(err);
        }
    })
  }
  

}
