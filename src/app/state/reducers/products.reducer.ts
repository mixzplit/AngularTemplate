import { createReducer, on } from '@ngrx/store';
import { ProductState } from 'src/app/core/models/products/Products.state';
import { ProductModel } from '../../core/models/products/Products.interface';
import { loadedProducts, removeProduct, removeProductSucess, showProducts } from '../actions/products.actions';

//TODO:Estado Inicial (e.j: Inicializador de variales)
export const initialState: ProductState = { loading: false, showTable: false, noData: false, noDataMessage: '', products: [] }

//TODO:Funciones puras
export const productsReducer = createReducer(
    initialState,
    on(showProducts, (state) => {
        return {...state, loading: true, showTable: false}
    }),
    on(loadedProducts, (state, param) => {
        const { products } = param;
        if(JSON.parse(JSON.stringify(products)).data.length > 0){
            return {...state, loading: false, showTable: true, noData: false, products}
        }else{
            return {...state, loading: false, showTable: false, noData: true, products}
        }
        //return {...state, loading: false, showTable: true, products}
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