import { Component, OnInit, VERSION } from '@angular/core';
import { faAngular, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { UserService } from '../../services/user.service';
import { MenuService } from '../../services/menu.service';

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
  userRole: string = '';
  isAdmin: boolean = false;
  /**
   * Constructor, recibe como parametro el servicio UserService
   * @param auth 
   */
  constructor(private auth: UserService, private menu: MenuService) { }
  
  /**
   * Metodo que se ejecuta cada vez que es invocado y dentro
   * llama al metodo que obtiene la informacion del usuario logeado.
   */
  ngOnInit(): void {
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
    const userResponse:any = this.auth.infoUser();
    //this.userRole = userResponse.rol.substring(3,userResponse.rol.length);
    this.getUserRole(userResponse.rol); 

  }

  getPermission(): string {
    const userResponse:any = this.auth.infoUser();
    return this.userRole = userResponse.rol.substring(3,userResponse.rol.length);
  }

  getNodeVersion(){
    this.auth.getNodeVersion().subscribe({
      next: resp => {
        //console.log(resp);
        this.response = resp;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  getUserRole(rol: any){
    let r = ''
    r = rol.find( (rol:string) => {
      return rol.includes('gadmin')
    });
    if(r === 'CN=gadmin'){
      this.isAdmin = true;
    }

  }

}
