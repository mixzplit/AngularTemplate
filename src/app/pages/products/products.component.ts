import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { faTimesCircle, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { Product } from '../../models/productModel';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';

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
  /** Iniciamos el objeto Product y lo asociamos a los valores del formulario */
  product: Product = new Product();
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
  /** Valor por defecto FALSE, se usa para mostrar un mensaje cuando la API no devuelve informacion */
  noData: boolean = false;

  /**
  * Constructor, recibe como parametro el FormBuilder y nuestro servicio ProductService
  * @param {FormBuilder} fb
  * @param {ProductService} productService 
  */
  constructor(private fb: FormBuilder, private productService: ProductService, private userService: UserService) {
    this.createForm();
  }
  /** Metodo que se ejecuta cuando carga la página */
  ngOnInit(): void {
    //console.log('Products Component');
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
  /** Valida el campo codigoarticulo del formulario */
  get codigoInvalid(){
    return this.form.get('codigoarticulo')?.invalid && this.form.get('codigoarticulo')?.touched
  }

  /**
   * Enviamos el Formulario
   * @returns Returna un objeto JSON con la informacion Success ó Error
   */
  onSubmit(){
    let formValues = this.form;
    this.loader = true;
    this.show = false;
    if(formValues.invalid){
      console.log(formValues);
      return Object.values(formValues.controls).forEach ( control => {
        control.markAsTouched();
      });
    }

    this.product = formValues.value;

    this.productService.getProduct(this.product).subscribe({
      next: (resp) => {
        this.response = resp
        this.loader = false;
        if(this.response.data.length > 0){
          this.show = true;
          this.errorMsg = '';
          this.noData = false;
        }else{
          this.noData = true;
          this.errorMsg = `El codigo ${this.product.codigoarticulo} no existe!!`;
        }
      },
      error: (err) => {
        console.log(err.error.error.sqlMsg);
        this.errorMsg = err.error.error.sqlMsg;
      }      
    });
  }
  
  /**
   * Enviamos el objeto item que seria el
   * resultado del metodo [OnSubmit]{@link ProductsComponent#onSubmit}
   * @param {Product} product 
   */
  onDelete(product: any, id: number){
    Swal.fire({
      title: 'Borrar Producto',
      text: `¿Esta seguro que desea borrar el articulo ${product.NOMBREARTICULO} ?`,
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true
    }).then( resp => {
      // Si la respuesta es TRUE, entonces borramos el articulo
      // si no, no hace nada.
      if(resp.value){
        this.productService.deleteProduct(product).subscribe({
          next: (resp) => {
            this.onSubmit(); //refrescamos
          },
          error: (err) => {
            console.log(err);
          }
        });
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
      codigoarticulo: ['',  ],
    });
  }

}
