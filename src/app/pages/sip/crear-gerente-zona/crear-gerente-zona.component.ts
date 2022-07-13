import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SipProcessService } from '../../../services/sip-process.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-gerente-zona',
  templateUrl: './crear-gerente-zona.component.html',
  styleUrls: ['./crear-gerente-zona.component.css']
})
export class CrearGerenteZonaComponent implements OnInit {
  title = 'Crear Gerentes de Zona SIP';

  form!: FormGroup;
  response: any = {};
  errorMsg: string = '';

  constructor(private fb: FormBuilder, private sipService: SipProcessService) { }

  ngOnInit(): void {
    this.createForm();
  }


  // Getters
  /** Valida el campo zona del formulario */
  get zonaInvalid(){
    return this.form.get('zona')?.invalid &&  ( this.form.get('zona')?.dirty || this.form.get('zona')?.touched)
  }

  get divisionInvalid(){
    return this.form.get('division')?.invalid && this.form.get('division')?.touched
  }
  
  get nombreApellidoInvalid(){
    return this.form.get('nombre')?.invalid && ( this.form.get('nombre')?.dirty || this.form.get('nombre')?.touched)
  }

  get tel1Invalid(){
    return this.form.get('telefono1')?.invalid && ( this.form.get('telefono1')?.dirty || this.form.get('telefono1')?.touched)
  }

  get tel2Invalid(){
    return this.form.get('telefono2')?.invalid && ( this.form.get('telefono2')?.dirty || this.form.get('telefono2')?.touched)
  }

  get emailInvalid(){
    return this.form.get('email')?.invalid && ( this.form.get('email')?.dirty || this.form.get('email')?.touched)
  }

  get domicilioInvalid(){
    return this.form.get('domicilio')?.invalid && ( this.form.get('domicilio')?.dirty || this.form.get('domicilio')?.touched)
  }

  get localidadInvalid(){
    return this.form.get('localidad')?.invalid && ( this.form.get('localidad')?.dirty || this.form.get('localidad')?.touched)
  }

  get provinciaInvalid(){
    return this.form.get('provincia')?.invalid && ( this.form.get('provincia')?.dirty || this.form.get('provincia')?.touched)
  }

  get anioCampaniaInvalid(){
    return this.form.get('anioCampaniaInicio')?.invalid && ( this.form.get('anioCampaniaInicio')?.dirty || this.form.get('anioCampaniaInicio')?.touched)    
  }

  onSubmit(){
    // validamos el formulario
    if(this.form.invalid){
      console.log(this.form);
      return Object.values(this.form.controls).forEach ( control => {
        control.markAsTouched();
      });
    }

    //mostramos un mensaje
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Creando Gerente de Zona...',
      showConfirmButton: false,
      //timer: 1500
    });
    Swal.showLoading();

    //Servicio
    this.sipService.createGerenteZona(this.form.value).subscribe({
      next: (resp) => {
        this.response = resp
        console.log(this.response);
        Swal.fire('Gerente de Zona Creada', '', 'success')
        this.onReset(); // Limpiamos el Form si es Success
      },
      error: (err) => { 
        console.log(err);
        this.errorMsg = (err.error.errors) ? err.error.errors[0].msg : err.error.sqlMsg;
        Swal.fire(this.errorMsg, '', 'error')
      }
    })

  }

  /**
   * Formulario Reactivo
   */
  createForm(){
    this.form = this.fb.group({
      zona: ['', [Validators.required, Validators.pattern(`^[0-9]*$`), Validators.minLength(2), Validators.maxLength(3)] ],
      division: ['', [Validators.required]],
      nombre: ['', [Validators.required, Validators.pattern(`[a-zA-Z ]*`)] ],
      telefono1: ['', [Validators.required, Validators.pattern(`^[0-9]*$`)]],
      telefono2: ['', [Validators.pattern(`^[0-9]*$`)]],
      //userid: [{value: this.lastId, disabled:true},,],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9-]+[.]+[a-z]{2,3}$')] ],
      domicilio: ['', [Validators.required]],
      localidad: ['', [Validators.required]],
      provincia: ['', [Validators.required]],
      anioCampaniaInicio: ['', [Validators.required, Validators.pattern(`^[0-9]*$`), Validators.maxLength(6), Validators.minLength(6)] ],
    });
  }

  /** Limpia el Formulario */
  onReset(){
    this.form.reset();
  }

}
