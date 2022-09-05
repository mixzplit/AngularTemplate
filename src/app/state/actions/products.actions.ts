import { createAction, props } from '@ngrx/store';
import { ProductModel } from 'src/app/core/models/products/Products.interface';

// Cargar Productos Loader
export const showProducts = createAction(
    '[Products List] Load List Products',
    props<{ form: object }>()
)
// Productos cargados
export const loadedProducts = createAction(
    '[Products List] Loaded Success',
    props<{ products: ProductModel[] }>()
)
// No data
export const noData = createAction(
    '[Products List] No Data'
)

export const removeProduct = createAction(
    '[Products List] Remove Product',
    props<{ id: number }>()
)

export const removeProductSucess = createAction(
    '[Products List] Remove Product Sucess',
    props<{ id: number }>()
)