import { createReducer, on } from '@ngrx/store';
import { showProducts, loadedProducts, removeProduct, removeProductSucess, noData } from '../actions/products.actions';
import { ProductState } from 'src/app/core/models/products/Products.state';
import { ProductModel } from '../../core/models/products/Products.interface';
import { map } from 'rxjs';

//TODO:Estado Inicial (e.j: Inicializador de variales)
export const initialState: ProductState = { loading: false, showTable: false, noData: false, noDataMessage: '', products: [] }

//TODO:Funciones puras
export const productsReducer = createReducer(
    initialState,
    on(showProducts, (state) => {
        return {...state, loading: true}
    }),
    on(loadedProducts, (state, param) => {
        const { products } = param;
        return {...state, loading: false, showTable: true, products}
    }),
    on(removeProduct, (state, {id}) => {
        return {...state, loading:true}
    }),
    on(removeProductSucess, (state, {id}) => {
        // Pasamos el estado de productos de tipo ProductModel
        // por un StringIfy
        const products = JSON.stringify(state.products)
        // Parseamos el string de Productos
        const productsParse = JSON.parse(products);
        // Filtramos el estado anterior de la lista de productos
        // y lo devolvemos en un nuevo estado
        const updatedProducts = productsParse.data.filter( (p:ProductModel) =>{
            return p.id !== id
        });
        return {...state, loading: false, products: updatedProducts}
    })
)