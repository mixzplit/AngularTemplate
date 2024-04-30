import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

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

  brandLogo: string = '';
  showLogo: boolean = false;

  /**
   * Constructor, recibe el UserService para obtener la
   * informacion del usuario y mostrar el Avatar
   * @param userService 
   */
  constructor(private userService: UserService, private router: Router) { }
  
  /**
   * Inicio del ciclo de vida del Componente
   */
  ngOnInit(): void {
    this.loadBrandLogo();
    this.respUserInfo = this.userService.infoUser();
  }
  
  /**
   * Destruimos la session y redireccionamos a la pagina principal
   */
  logout(){
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Desconectando...',
      showConfirmButton: false,
      //timer: 1500
    });
    Swal.showLoading();

    this.userService.logout().subscribe({
      next: (resp) => {
        this.userService.deleteCookie();
        Swal.close();
        this.router.navigateByUrl('/');
        //window.location.reload();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  loadBrandLogo(){
    if(environment.production){
      this.brandLogo = 'assets/images/tupperware_header.png';
      this.showLogo = true;
    }
  }

}
