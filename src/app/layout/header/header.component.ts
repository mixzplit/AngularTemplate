import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

/**
 * HeaderComponent
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /** Respuesta del Servicio */
  respUserInfo: any;

  /**
   * Constructor, recibe el UserService para obtener la
   * informacion del usuario y mostrar el Avatar
   * @param userService 
   */
  constructor(private userService: UserService) { }
  
  /**
   * Inicio del ciclo de vida del Componente
   */
  ngOnInit(): void {
    this.respUserInfo = this.userService.infoUser();
  }

}
