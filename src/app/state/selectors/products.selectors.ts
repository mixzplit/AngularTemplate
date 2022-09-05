import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ProductState } from '../../core/models/products/Products.state';
import { removeProduct, noData } from '../actions/products.actions';

//TODO:ES el selector que tiene relacion con la propiedad "products"
export const selectProductsFeature = (state: AppState) => state.products; //TODO:PADRE
/** Productos */
export const selectProductsList = createSelector(
    selectProductsFeature,
    (state: ProductState) => state.products //TODO:HJO
)
/** Con estos manejamos el loading de productos */
export const selectProductsLoading = createSelector(
    selectProductsFeature,
    (state: ProductState) => state.loading //TODO:HJO
)

/** Nos sirve para mostar/ocultar el HTML Table en la vista */
export const selectProductsTable = createSelector(
    selectProductsFeature,
    (state: ProductState) => state.showTable
)
