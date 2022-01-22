import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { faTimesCircle, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

/**
 * Componente Products.
 * 
 * Maneja todo lo relaciona a los Articulos WOE
 */
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  /** Titulo de la Página */
  title: string = 'Articulos WOE';
  /** 
   * Formulario Reactivo
   * Realiza un seguimiento del valor y el estado de validez de un grupo de instancias de FormControl 
   */
  form!: FormGroup;
  /** Guardamos la informacion de la respuesta */
  response: any = {};
  /** Guardamos el mensaje de Error */
  errorMsg: string = '';
  /** FontAwsome Icon faTimeCircle */
  faTimesCircle = faTimesCircle;
  /** 
   * Valor por defecto FALSE, se usa para mostrar la tabla
   * solo cuando haya informacion en la respuesta
   */
  show: boolean = false;
  /** Valor por defecto FALSE, se usa para mostrar el Skeleton Loading */
  loader: boolean = false;
  /**
  * Constructor, recibe como parametro el FormBuilder y nuestro servicio ProductService
  * @param {FormBuilder} fb
  * @param {ProductService} productService 
  */
  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.createForm();
  }
  /** Metodo que se ejecuta cuando carga la página */
  ngOnInit(): void {
    console.log('Products Component');
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
  /** Valida el campo codigoarticulo del formulario */
  get codigoInvalid(){
    return this.form.get('codigoarticulo')?.invalid && this.form.get('codigoarticulo')?.touched
  }

  /**
   * Enviamos el Formulario
   * @returns Returna un objeto JSON con la informacion Success ó Error
   */
  onSubmit(){
    /** Guardamos la informacion del formulario reactivo en esta variable */
    let formValues = this.form;
    this.loader = true;
    this.show = false;
    if(formValues.invalid){
      console.log(formValues);
      return Object.values(formValues.controls).forEach ( control => {
        control.markAsTouched();
      });
    }

    this.productService.getProduct(formValues.value).subscribe({
      next: (resp) => {
        this.response = resp
        //setTimeout(() => {
          this.show = true;
          this.loader = false;
        //}, 3000);
      },
      error: (err) => {
        console.log(err.error.error.sqlMsg);
        this.errorMsg = err.error.error.sqlMsg;
      }
      
    })

  }
  
  /**
   * Enviamos el objeto item que seria el
   * resultado del metodo {@link onSubmit}
   * @param {Object} item 
   */
  onDelete(item: any){
    
    this.productService.deleteProduct(item).subscribe({
      next: (resp) => {
        this.response = resp;
        console.log(this.response);
        this.onSubmit();
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  /**
   * Creacion del formulario Reactivo con sus Validadores.
   * 
   */
  createForm() {
    this.form = this.fb.group({
      anio: ['', [Validators.required, 
                  Validators.minLength(4), 
                  Validators.maxLength(4), 
                  Validators.pattern(`^[0-9]*$`) ] ],
      campania: ['', [Validators.required, Validators.maxLength(2)] ],
      codigoarticulo: ['', [Validators.required] ],

    });
  }

}
