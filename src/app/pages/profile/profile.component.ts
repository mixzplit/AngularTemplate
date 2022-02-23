import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

/**
 * ProfileComponent
 * 
 * Informacion general del usuario
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  /** Guardamos la informacion de la respuesta parseada como objeto JSON */
  respUserInfo: any;
  /**
   * Constructor, recibe como parametro el servicio UserService
   * @param auth 
   */
  constructor(private auth: UserService) { }
  
  /**
   * Metodo que se ejecuta cada vez que es invocado y dentro
   * llama al metodo que obtiene la informacion del usuario logeado.
   */
  ngOnInit(): void {
    console.log('ProfileComponents');
    /* if(!this.auth.getCookie()){
      window.location.reload();
    } */
    this.getUserInfo();
  }
  
  /**
   * Metodo que obtiene la informacion del usuario desde el servicio y
   * se ejecuta cada vez que es invocado.
   */
  getUserInfo(){
    this.respUserInfo = this.auth.infoUser();
  }

}
