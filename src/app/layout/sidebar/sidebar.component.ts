import { Component, OnInit } from '@angular/core';
import { faFileAlt, faFireAlt, faOutdent, faTachometerAlt, faThList } from '@fortawesome/free-solid-svg-icons';
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
  faThList = faThList
  faTachometerAlt = faTachometerAlt;
  faFileAlt = faFileAlt;
  faOutDent = faOutdent;
  faFireAlt = faFireAlt;
  /**
   * COnstructor, recibe el RoleGuard para validar el acceso 
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
