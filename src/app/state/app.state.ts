import { ActionReducerMap } from '@ngrx/store';
import { ProductState } from '../core/models/products/Products.state';
import { productsReducer } from './reducers/products.reducer';

export interface AppState {
    products: ProductState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    products: productsReducer,
};
