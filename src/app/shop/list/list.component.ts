import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductModel } from '@app/@shared/models';
import { ProductsDbService } from '@app/@shared/services/products-db.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'shop-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  products$: Observable<ProductModel[]> = this._productsDB.productsList$();

  constructor(private _productsDB: ProductsDbService) {}
}
