import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SipProcessService } from 'src/app/services/sip-process.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css']
})
export class CrearUsuariosComponent implements OnInit {
  title = 'Crear Usuarios SIP';

  form!: FormGroup;
  lastId: number = 0;
  response: any = {};
  /** Guardamos el mensaje de Error */
  errorMsg: string = '';

  constructor(private fb: FormBuilder, private sipService: SipProcessService) { }

  ngOnInit(): void {
    this.maxId();
    this.createForm();
  }
  
  // Getters
  /** Valida el campo zona del formulario */
  get zonaInvalid(){
    return this.form.get('zona')?.invalid &&  ( this.form.get('zona')?.dirty || this.form.get('zona')?.touched)
  }

  get usernameInvalid(){
    return this.form.get('usuario')?.invalid && this.form.get('usuario')?.touched
  }
  
  get nombreApellidoInvalid(){
    return this.form.get('nombre')?.invalid && ( this.form.get('nombre')?.dirty || this.form.get('nombre')?.touched)
  }

  get grupoInvalid(){
    return this.form.get('grupo')?.invalid && ( this.form.get('grupo')?.dirty || this.form.get('grupo')?.touched)
  }

  get emailInvalid(){
    return this.form.get('email')?.invalid && ( this.form.get('email')?.dirty || this.form.get('email')?.touched)
  }

  onSubmit(){
    let formValues = this.form.value;

    if(this.form.invalid){
      console.log(this.form);
      return Object.values(this.form.controls).forEach ( control => {
        control.markAsTouched();
      });
    }
    console.log(this.lastId);
    formValues['userid'] = this.lastId;

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Creando Usuario...',
      showConfirmButton: false,
      //timer: 1500
    });
    Swal.showLoading();


    this.sipService.createUsuario(formValues).subscribe({
      next: (resp) => { 
        this.response = resp
        console.log(this.response);
        Swal.fire('Usuario Creado', '', 'success')
        this.onReset(); // Limpiamos el Form si es Success
        this.maxId();
      },
      error: (err) => { 
        console.log(err);
        this.errorMsg = (err.error.errors) ? err.error.errors[0].msg : err.error.sqlMsg;
        Swal.fire(this.errorMsg, '', 'error')
      }
    });

  }

  maxId(): any{
    this.sipService.getMaxIdUser().subscribe({
      next: (resp: any) =>{
        this.lastId = resp.data[0].max_id;
        return this.lastId;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  createForm(){
    this.form = this.fb.group({
      userid: [{value: this.lastId, disabled:true},,],
      usuario: ['', [Validators.required]],
      nombre: ['', [Validators.required, Validators.pattern(`[a-zA-Z ]*`)] ],
      grupo: ['', [Validators.required, Validators.pattern(`^[0-9]*$`), Validators.maxLength(1), Validators.minLength(1)] ],
      zona: ['', [Validators.required, Validators.pattern(`^[0-9]*$`), Validators.minLength(2), Validators.maxLength(3)] ],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9-]+[.]+[a-z]{2,3}$')] ],
    });
  }
  
  /** Limpia el Formulario */
  onReset(){
    this.form.reset();
  }

}
