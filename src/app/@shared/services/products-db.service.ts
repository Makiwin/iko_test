import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { dataProducts } from '../data/products.data';
import { ProductModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductsDbService {
  productsList$(): Observable<ProductModel[]> {
    return of(dataProducts);
  }

  getProduct$(productId: number | string): Observable<ProductModel> {
    if (typeof productId === 'string') {
      productId = parseInt(productId);
    }
    return of(dataProducts).pipe(map((products) => products.find((product) => product.productId === productId)));
  }
}
