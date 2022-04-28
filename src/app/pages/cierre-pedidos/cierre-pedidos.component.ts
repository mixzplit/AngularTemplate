import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { CierrePedidosService } from '../../services/cierre-pedidos.service';

/**
 * Componente CierrePedidos.
 * 
 * Este componente manejara todo lo referente la modificaciones de la
 * fecha de Cierre de Pedidos en WOE.
 */
@Component({
  selector: 'app-cierre-pedidos',
  templateUrl: './cierre-pedidos.component.html',
  styleUrls: ['./cierre-pedidos.component.css']
})
export class CierrePedidosComponent implements OnInit {
  /** Titulo de la Página */
  title: string = 'Cierre de Pedidos WOE';
  /** 
   * Formulario Reactivo
   * Realiza un seguimiento del valor y el estado de validez de un grupo de instancias de FormControl 
   */
  form!: FormGroup;
  /** Guardamos la informacion de la respuesta */
  response: any = {};
  /** Guardamos el mensaje de Error */
  errorMsg: string = '';
  /** Aqui mandamos el mensaje si falló la transferencia del archivo al gestor */
  errorFileToGestor: string = '';
  /** Aqui mandamos el mensaje de Success */
  successMsg: string = ''; 
  /** Aqui mandamos el mensaje si el archivo fue enviado correctamente al Gestor */
  successFileToGestor: string = ''; 
  
  /**
   * Constructor, recibe los servicios FormBuilder para formularios Reactivos y nuestro servicios
   * de Cierre de Pedidos. DatePipe para transformar las Fechas.
   * @param fb 
   * @param cierrePedidos 
   * @param datepipe 
   */
  constructor( private fb: FormBuilder, private cierrePedidos: CierrePedidosService,
              public datepipe: DatePipe, private userService: UserService) {
    this.createForm();
  }
  /** Metodo que se ejecuta a llamar al componente */
  ngOnInit(): void {
    /* if(!this.userService.getCookie()){
      window.location.reload();
    } */
  }
  
  /**
   * @ignore
   */
  get anio() { return this.form.get('anio'); }
  /**
   *  Valida el campo año del formulario, acepta 4 caracteres 
   *  @example 
   *  2021 
   */
  get anioInvalid(){
    return this.form.get('anio')?.invalid && ( this.form.get('anio')?.dirty || this.form.get('anio')?.touched)
  }
  /** Valida el campo campania del formulario */
  get campaniaInvalid(){
    return this.form.get('campania')?.invalid && this.form.get('campania')?.touched
  }
  /** Valida el campo zona del formulario */
  get zonaInvalid(){
    return this.form.get('zona')?.invalid && this.form.get('zona')?.touched
  }
  /** 
   * Valida el campo contrato del formulario. Este campo contiene los perfiles:
   * @example
   * Gerente de Zona, Revendedora...
   * 
   * Se hizo de esta manera para emular el archivo generado por el Gestor de Interfaces.
   */
  get perfilInvalid(){
    return this.form.get('contrato')?.invalid && this.form.get('contrato')?.touched
  }
  /** Valida el campo Fecha del formulario */
  get fechaInvalid(){
    return this.form.get('fecha')?.invalid && this.form.get('fecha')?.touched
  }
  /** 
   * Valida el campo serie del formulario. Este campo contendra la hora, el campo se llama seria
   * para emular el archivo generado por el Gestor de Interfaces
   */
  get horaInvalid(){
    return this.form.get('serie')?.invalid && this.form.get('serie')?.touched
  }
  
  /**
   * Enviamos el Formulario
   * @returns 
   */
  onSubmit(){
    
    this.errorMsg = '';
    this.successMsg = '';
    
    let ngbDate = this.form.controls['fecha'].value; // seteamos el valor de la fecha en el form en una variable
    let formValues = this.form.value; // asignamos el valor de todos los campos del Form en una variable

    // Validamos que la fecha no este vacia
    if( typeof ngbDate !== 'undefined'  ){
      // aqui hacemos la conversion del objeto fecha de ngbDatepicker
      // y le asignamos el nuevo valor a la propiedad fecha del Form
      let myDate = new Date(ngbDate.year, ngbDate.month-1, ngbDate.day);
      let formatDate = this.datepipe.transform(myDate,'yyyy-MM-dd');
      formValues['fecha'] = formatDate;
    }

    if(this.form.invalid){
      console.log(this.form);
      return Object.values(this.form.controls).forEach ( control => {
        control.markAsTouched();
      });
    }

    this.cierrePedidos.cierrePedidos(formValues).subscribe({
      next: (resp) => { 
        this.response = resp
        console.log(this.response);
        this.successMsg = this.response.msg;
        if(this.response.fileSend.status){
          this.successFileToGestor = this.response.fileSend.msg;
        }else{
          this.errorFileToGestor = this.response.fileSend.msg;
        }
        this.onReset(); // Limpiamos el Form si es Success
      },
      error: (err) => { 
        console.log(err);
        this.errorMsg = err.error.msg
      }
    });
  }
  
  /** Limpia el Formulario */
  onReset(){
    this.form.reset();
  }

  /**
   * Creacion del formulario Reactivo con sus Validadores.
   */
  createForm() {
    this.form = this.fb.group({
      anio: ['', [Validators.required, 
                  Validators.minLength(4), 
                  Validators.maxLength(4), 
                  Validators.pattern(`^[0-9]*$`) ] ],
      campania: ['', [Validators.required, Validators.maxLength(2), Validators.min(1), Validators.max(20)] ],
      zona: ['', [Validators.required, Validators.maxLength(3)] ],
      contrato: ['', Validators.required], //perfil
      fecha: ['', Validators.required],
      serie: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]] // hora 00:00
    });
  }

}
