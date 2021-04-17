import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductModel } from '../models';
import { ProductsDbService } from '../services/products-db.service';

@Pipe({
  name: 'relatedProducts',
})
export class RelatedProductsPipe implements PipeTransform {
  constructor(private _productsDB: ProductsDbService) {}

  transform(productIds: number[]): Observable<ProductModel[]> {
    return this._productsDB
      .productsList$()
      .pipe(map((products) => products.filter((product) => productIds.indexOf(product.productId) !== -1)));
  }
}
