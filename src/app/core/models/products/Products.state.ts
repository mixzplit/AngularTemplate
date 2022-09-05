import { ProductModel } from './Products.interface';

export interface ProductState {
    loading: boolean;
    showTable: boolean;
    noData: boolean;
    noDataMessage: string;
    products: ReadonlyArray<ProductModel>;
}
