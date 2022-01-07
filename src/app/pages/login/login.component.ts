import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../models/usuarioModel';
import { UserService } from '../../services/user.service';
//import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UsuarioModel = new UsuarioModel();
  response: Object = [];
  errorMsg: string = '';

  constructor(private router: Router, private auth: UserService, /*private cookieService:CookieService*/) { 

  }

  ngOnInit(): void {
    console.log('LoginComponent');
  }

  login (form: NgForm){
    if ( form.invalid ) {
      console.log(form);
      return;
    }

    this.auth.authUser(this.user).subscribe({
      next: (resp) => { 
        this.response = resp
        console.log(this.response);
        this.router.navigateByUrl('/home');
      },
      error: (err) => { 
        console.log(err);
        this.errorMsg = err.error.err.message
      }
    }
     
    )

  }

}
