import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ProductModel } from '@app/@shared/models';
import { ProductsDbService } from '@app/@shared/services/products-db.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  product$: BehaviorSubject<ProductModel> = new BehaviorSubject<ProductModel>(null);

  constructor(private _productsDB: ProductsDbService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    this._productsDB.getProduct$(route.params.id).subscribe((product) => {
      this.product$.next(product);
    });
    window.scroll(0, 0);
    return true;
  }
}
