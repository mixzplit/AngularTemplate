import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SipProcessService } from 'src/app/services/sip-process.service';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../../models/usuarioModel';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css']
})
export class CrearUsuariosComponent implements OnInit {
  title = 'Crear Usuarios SIP';

  usuarioSip: UsuarioModel = new UsuarioModel()
  form!: FormGroup;
  lastId: number = 0;
  response: any = {};
  /** Guardamos el mensaje de Error */
  errorMsg: string = '';

  constructor(private fb: FormBuilder, private sipService: SipProcessService) { }

  ngOnInit(): void {
    this.maxId();
    this.createForm();
    this.onValidateZonaByGrupo();
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
      return Object.values(this.form.controls).forEach ( control => {
        control.markAsTouched();
      });
    }

    formValues['userid'] = this.lastId;

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Creando Usuario...',
      showConfirmButton: false,
      //timer: 1500
    });
    Swal.showLoading();

    //Asignamos el valor del form a la clase UsuarioModel
    this.usuarioSip = formValues;

    this.sipService.createUsuario(this.usuarioSip).subscribe({
      next: (resp) => { 
        this.response = resp
        Swal.fire('Usuario Creado', '', 'success')
        this.onReset(); // Limpiamos el Form si es Success
        this.maxId();
      },
      error: (err) => { 
        this.errorMsg = (err.error.errors) ? err.error.errors[0].msg : err.error.sqlMsg;
        Swal.fire(this.errorMsg, '', 'error')
      }
    });

  }

  maxId(): any{
    this.sipService.getMaxIdUser().subscribe({
      next: (resp: any) =>{
        this.lastId = resp.data[0].max_id;
        return this.lastId + 1;
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
      zona: ['', [] ],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9-]+[.]+[a-z]{2,3}$')] ],
    });
  }
  
  /** Limpia el Formulario */
  onReset(){
    this.form.reset();
  }

  onValidateZonaByGrupo(){
    this.form.get('grupo')?.valueChanges.subscribe((grupoValue) => {
      const zonaControl = this.form.get('zona');

      // Limpiar validadores actuales
      zonaControl?.clearValidators();

      if (grupoValue === '3') {
        // Agregar validador específico si el grupo es '2'
        zonaControl?.setValidators([
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(2),
          Validators.maxLength(3)
        ]);
      } else if (grupoValue === '1' || grupoValue === '2') {
        // Agregar validador para grupos distintos de '2'
        zonaControl?.setValidators([
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.maxLength(1)]);
      }

      // Actualizar validadores y forzar la validación
      zonaControl?.updateValueAndValidity();
    });
  }

  /**
   * Metodo para cambiar el placeHolder del campo
   * Segun e grupo seleccionado
   * @returns string
   */
  getZonaPlaceholder(): string {
    const grupoValue = this.form.get('grupo')?.value;
  
    if (grupoValue === '1') {
      return 'Tupperware';
    } else if (grupoValue === '2') {
      return 'Division';
    } else if (grupoValue === '3') {
      return 'Zona';
    } else {
      return 'Zona'; // Valor predeterminado o manejo de otros casos
    }
  }

}
