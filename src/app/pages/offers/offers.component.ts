import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OffersService } from 'src/app/services/offers.service';
import { Offer } from '../../models/offerModel';
import { UserService } from 'src/app/services/user.service';

/**
 * Componente Ofertas WAO
 * 
 * Aqui manejamos la informacion de
 * ofertas Wao cargadas en WOE
 */
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  /** Titulo de la Página */
  title: string = 'Listado Ofertas Wao';

  /** 
   * Formulario Reactivo
   * Realiza un seguimiento del valor y el estado de validez de un grupo de instancias de FormControl 
   */
  form!: FormGroup;
  /** Guardamos la informacion de la respuesta */
  product: Offer = new Offer();
  /** Guardamos la informacion de la respuesta API */
  response: any = {};
  /** Guardamos el mensaje de Error */
  errorMsg: string = '';
  
  /** 
   * Valor por defecto FALSE, se usa para mostrar la tabla
   * solo cuando haya informacion en la respuesta
   */
  show: boolean = false;
   /** Valor por defecto FALSE, se usa para mostrar el Skeleton Loading */
  loader: boolean = false;
  /** Valor por defecto FALSE, se usa para mostrar un mensaje cuando la API no devuelve informacion */
  noData: boolean = false;
  
  /**
   * @ignore
   * @param fb 
   * @param offersService 
   * @param userService 
   */
  constructor(private fb: FormBuilder, private offersService: OffersService, private userService: UserService) { 
    this.createForm();
  }

  /**
   * Metodo que se ejecuta al momento en que el 
   * componente es invocado y validamos si la session actual
   * es activa.
   */
  ngOnInit(): void {
    /* if(!this.userService.getCookie()){
      window.location.reload();
    } */
  }

  // Getters Validators
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


  /**
   * Enviamos el formulario para la busqueda de
   * ofertas wao
   * @returns 
   */
  onSubmit(){
    let formValues = this.form;
    this.loader = true;
    this.show = false;
    if(formValues.invalid){
      return Object.values(formValues.controls).forEach ( control => {
        control.markAsTouched();
      });
    }

    this.product = formValues.value;

    this.offersService.getOffers(this.product).subscribe({
      next: (resp) => {
        this.response = resp
        this.loader = false;
        this.noData = false;
        if(this.response.offers.length > 0){
          this.show = true;
        }else{
          this.noData = true;
          this.errorMsg = `No hay ofertas para el Año/Campaña seleccionado.`;
        }
      },
      error: (err) => {
        this.errorMsg = err.error.error.sqlMsg;
      }      
    });
  }

  /**
   * Creacion del formulario Reactivo con sus Validadores.   * 
   */
  createForm() {
    this.form = this.fb.group({
      anio: ['', [Validators.required, 
                  Validators.minLength(4), 
                  Validators.maxLength(4), 
                  Validators.pattern(`^[0-9]*$`) ] ],
      campania: ['', [Validators.required, Validators.maxLength(2)] ],
      //codigoarticulo: ['', [Validators.required] ],
    });
  }


}
