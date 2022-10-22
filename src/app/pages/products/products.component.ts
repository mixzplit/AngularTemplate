import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { showProducts } from 'src/app/state/actions/products.actions';
import { AppState } from 'src/app/state/app.state';
import Swal from 'sweetalert2';
import { ProductModel } from '../../core/models/products/Products.interface';
import { Product } from '../../models/productModel';
import { removeProduct } from '../../state/actions/products.actions';
import {
  noDataProduct,
  selectProductsList,
  selectProductsLoading,
  selectProductsTable
} from '../../state/selectors/products.selectors';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

/**
 * Componente Products.
 *
 * Maneja todo lo relaciona a los Articulos WOE
 */
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, AfterViewInit {
  /** Titulo de la Página */
  title: string = 'Articulos WOE';
  /**
   * Formulario Reactivo
   * Realiza un seguimiento del valor y el estado de validez de un grupo de instancias de FormControl
   */
  form!: FormGroup;
  /** Iniciamos el objeto Product y lo asociamos a los valores del formulario */
  product: Product = new Product();

  /** Guardamos el mensaje de Error */
  errorMsg: string = '';
  /** FontAwsome Icon faTimeCircle */
  faTimesCircle = faTimesCircle;

  /** Valor por defecto FALSE, se usa para mostrar un mensaje cuando la API no devuelve informacion */
  noData: boolean = false;

  //Aplicando Redux NgRX
  loading$: Observable<boolean> = new Observable();
  showTable$: Observable<boolean> = new Observable();
  products$: Observable<any> = new Observable();
  noData$: Observable<boolean> = new Observable();

  /** Material Angular Table */
  displayedColumns: string[] = [
    'id',
    'anio',
    'campania',
    'codigoarticulo',
    'codigofacturacion',
    'correlativo',
    'nombrearticulo',
    'precioorden',
    'acciones'
  ];

  dataSource = new MatTableDataSource<ProductModel>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /**
   * Constructor, recibe como parametro el FormBuilder y
   * el Store de NgRX
   * @param {FormBuilder} fb
   * @param {Store<AppState>} store
   */
  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.createForm();
  }
  ngAfterViewInit(): void {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }
  /** Metodo que se ejecuta cuando carga la página */
  ngOnInit(): void {}

  // Getters Validators
  /**
   *  Valida el campo año del formulario, acepta 4 caracteres
   *  @example
   *  2021
   */
  get anioInvalid() {
    return (
      this.form.get('anio')?.invalid &&
      (this.form.get('anio')?.dirty || this.form.get('anio')?.touched)
    );
  }
  /** Valida el campo campania del formulario */
  get campaniaInvalid() {
    return (
      this.form.get('campania')?.invalid && this.form.get('campania')?.touched
    );
  }
  /** Valida el campo codigoarticulo del formulario */
  get codigoInvalid() {
    return (
      this.form.get('codigoarticulo')?.invalid &&
      this.form.get('codigoarticulo')?.touched
    );
  }

  /**
   * Enviamos el Formulario
   * @returns Returna un objeto JSON con la informacion Success ó Error
   */
  onSubmit() {
    let formValues = this.form;

    if (formValues.invalid) {
      return Object.values(formValues.controls).forEach((control) => {
        control.markAsTouched();
      });
    }


    this.product = formValues.value;
    //NgRX
    this.loading$ = this.store.select(selectProductsLoading); //SkeletonLoader -> true or false
    this.showTable$ = this.store.select(selectProductsTable); //Show table -> true or false
    this.store.dispatch(showProducts(formValues.value)); // Disparamos la accion
    this.noData$ = this.store.select(noDataProduct);
    this.products$ = this.store.select(selectProductsList); // Obtenemos valores
    //TODO:Buscamos en el observable de producto para asignar
    // valores a Material Matable
    this.products$.subscribe({
      next: (resp) => {
        this.dataSource.data = resp;
        this.dataSource.data = resp.data;
        //this.dataSource.paginator = this.paginator;
        setTimeout(() => this.dataSource.paginator = this.paginator);
        this.dataSource.sort = this.sort;
      },
    });
  }
  /**
   * Filtrado de Material Table
   * @param event 
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**
   * Enviamos el objeto item que seria el
   * resultado del metodo [OnSubmit]{@link ProductsComponent#onSubmit}
   * @param {Product} product
   */
  onDelete(product: any) {
    Swal.fire({
      title: 'Borrar Producto',
      text: `¿Esta seguro que desea borrar el articulo ${product.NOMBREARTICULO} ?`,
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true,
    }).then((resp) => {
      // Si la respuesta es TRUE, entonces borramos el articulo
      // si no, no hace nada.
      if (resp.value) {
        //NgRX
        console.log(product.ID);
        this.store.dispatch(removeProduct({ id: product.ID }));
        // Despues de eliminar un producto mandamo nuevamente el
        // Submit para reflejar el cambio en la lista
        // TODO:Verificar cual seria la mejor opcion
        this.onSubmit();
      }
    });
  }

  /**
   * Creacion del formulario Reactivo con sus Validadores.
   *
   */
  createForm() {
    this.form = this.fb.group({
      anio: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.pattern(`^[0-9]*$`),
        ],
      ],
      campania: ['', [Validators.required, Validators.maxLength(2)]],
      codigoarticulo: [''],
    });
  }
}
