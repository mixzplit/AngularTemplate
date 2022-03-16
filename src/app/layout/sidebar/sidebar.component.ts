import { Component, OnInit } from '@angular/core';
import { faFileAlt, faFireAlt, faOutdent, faTachometerAlt, faThList, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { RoleGuard } from '../../guards/role.guard';

/**
 * SidebarComponent
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  /** FontAwesome Icon para el Sidebar Menu */
  faThList = faThList
  /** FontAwesome Icon para el Sidebar Menu */
  faTachometerAlt = faTachometerAlt;
  /** FontAwesome Icon para el Sidebar Menu */
  faFileAlt = faFileAlt;
  /** FontAwesome Icon para el Sidebar Menu */
  faOutDent = faOutdent;
  /** FontAwesome Icon para el Sidebar Menu */
  faFireAlt = faFireAlt;
  
  faUsers = faUsers;
  faUserPlus = faUserPlus;

  /**
   * Constructor, recibe el RoleGuard para validar el acceso 
   * a menus segun el rol del usuario
   * @param roleGuard 
   */
  constructor(public roleGuard: RoleGuard) { }
  
  /**
   * @ignore
   */
  ngOnInit(): void {
  }

}
