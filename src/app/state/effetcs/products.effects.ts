import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import { removeProduct } from '../actions/products.actions';

@Injectable()
export class ProductsEffects {
    /** Servicio Productos */
    loadProducts$ = createEffect( () => this.actions$.pipe(
        ofType('[Products List] Load List Products'),
        mergeMap((action) => this.productService.getProduct(action) //TODO:Objeto que viene del FormValues
            .pipe(
                map(products => ({ type: '[Products List] Loaded Success', products })),
                catchError(() => EMPTY)
            )
        )
    ));


    deleteProduct$ = createEffect( () => {
        return this.actions$.pipe(
            ofType(removeProduct),
            mergeMap( (action) => {
                return this.productService.deleteProduct(action.id).pipe(
                    map(() => {
                        return ({type: '[Products List] Remove Product Sucess', id: action.id})
                    })
                )
            } )
        )
    } )



    constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

}
