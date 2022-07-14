import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productsdeletes',
  templateUrl: './productsdeletes.component.html',
  styleUrls: ['./productsdeletes.component.css']
})
export class ProductsdeletesComponent implements OnInit {
  /** Titulo de la Página */
  title: string = 'Articulos Eliminados WOE';
  /** 
   * Formulario Reactivo
   * Realiza un seguimiento del valor y el estado de validez de un grupo de instancias de FormControl 
   */
  form!: FormGroup;
  /** Guardamos la informacion de la respuesta */
  response: any = {};
  /** Guardamos el mensaje de Error */
  errorMsg: string = '';
  /** 
   * Valor por defecto FALSE, se usa para mostrar la tabla
   * solo cuando haya informacion en la respuesta
   */
  show: boolean = false;
  
  faFolderPlus = faFolderPlus;

  constructor(private fb: FormBuilder, private productService: ProductService) { 
    this.createForm();
  }

  ngOnInit(): void {
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
    });
  
  }

  onSubmit(){
    let formValues = this.form;

    this.show = false;
    if(formValues.invalid){
      console.log(formValues);
      return Object.values(formValues.controls).forEach ( control => {
        control.markAsTouched();
      });
    }
    console.log(formValues.value);
    //this.product = formValues.value;

    this.productService.getProductsDelete(formValues.value).subscribe({
      next: (resp) => {
        console.log(resp);
        this.response = resp;
        if(this.response.productos.length > 0){
          this.show = true;
        }
      },
      error: (err) => {
        console.log(err);
        this.errorMsg = err;
      }
    });

  }


  onReactive(product: any, id: number){
    Swal.fire({
      title: 'Borrar Producto',
      text: `¿Esta seguro que desea activar el articulo ${product.codigoarticulo} ?`,
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true
    }).then( resp => {
      // Si la respuesta es TRUE, entonces borramos el articulo
      // si no, no hace nada.
      if(resp.value){
        this.productService.postActivarCodigo(product).subscribe({
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

}
