import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  constructor(private userService: UserService, private router: Router) { }
  
  /**
   * Inicio del ciclo de vida del Componente
   */
  ngOnInit(): void {
    this.respUserInfo = this.userService.infoUser();/* 
    let session_id = JSON.parse(this.userService.getCookie());
    console.log(session_id.session_id);
    console.log(this.respUserInfo); */
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


}
