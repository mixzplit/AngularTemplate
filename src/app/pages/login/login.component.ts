import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../models/usuarioModel';
import { UserService } from '../../services/user.service';
import { environment } from '../../../environments/environment';

/**
 * Componente Login
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /**
   * Instancia de la Clase UsuarioModel
   */
  user: UsuarioModel = new UsuarioModel();
  /** Guardamos la informacion de la respuesta */
  response: Object = [];
  /** Guardamos el mensaje de Error */
  errorMsg: string = '';

  brandLogo: string = '';
  landscapeLogo: string = '';
  styleButton: string = '';


  /**
   * Constructor, recibe como parametros los servicios Router y UserService
   * @param router 
   * @param auth 
   */
  constructor(private router: Router, private auth: UserService) { 

  }
  
  /**
   * Metodo que se ejecuta al momento de cargar la pagina.
   * Dentro de este metodo validamos si existe un token o session activa,
   * si es true no pide las credenciales de acceso.   * 
   */
  ngOnInit(): void {
    //console.log('LoginComponent');
    this.loadBrandLogo();
    if(this.auth.isAuth()){
      this.router.navigateByUrl('/home');
    }
  }
  
  /**
   * Metodo que envia la informacion del usuario desde el formulario
   * para que sea validado por el servicio {@link UserService} en el metodo
   * authUser() 
   * @param {NgForm} form 
   * @returns Redireccion al home si la credenciales fueron validadas correctamente
   */
  login (form: NgForm){
    if ( form.invalid ) {
      //console.log(form);
      return;
    }

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Conectando...',
      showConfirmButton: false,
      //timer: 1500
    });
    Swal.showLoading();

    this.auth.authUser(this.user).subscribe({
      next: (resp) => { 
        this.response = resp
        //console.log(this.response);
        Swal.close();
        this.router.navigateByUrl('/home/dashboard');
      },
      error: (err) => { 
        //console.log(err);
        this.errorMsg = err.error.err.message
        Swal.fire(this.errorMsg, '', 'error')
      }
    });

  }

  loadBrandLogo(){
    if(environment.production){
      this.brandLogo = 'assets/images/tupperware_black.png';
      this.landscapeLogo = 'assets/images/Landscape_Login.png';
    }else{
      this.brandLogo = 'assets/images/logo.svg';
      this.landscapeLogo = 'assets/images/comic.jpg';
    }
  }

}
