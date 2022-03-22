import { Component, OnInit, VERSION } from '@angular/core';
import { faAngular, faNodeJs } from '@fortawesome/free-brands-svg-icons';
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
  // versiones
  version = VERSION.full;
  faAngular = faAngular;
  faNode = faNodeJs;
  response: any = {};
  
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
    this.getNodeVersion();
  }
  
  /**
   * Metodo que obtiene la informacion del usuario desde el servicio y
   * se ejecuta cada vez que es invocado.
   */
  getUserInfo(){
    this.respUserInfo = this.auth.infoUser();
  }

  getNodeVersion(){
    this.auth.getNodeVersion().subscribe({
      next: resp => {
        console.log(resp);
        this.response = resp;
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
