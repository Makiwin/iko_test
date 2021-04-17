import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProductModel } from '@app/@shared/models';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ItemService } from './item.service';

@Component({
  selector: 'shop-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ItemComponent {
  openPanels = ['description'];
  hasDetail = false;
  products$: Observable<ProductModel> = this._service.product$.pipe(
    tap((product) => {
      this.hasDetail = product.color?.length > 0 || product.sizes?.length > 0;
      this.hasDetail ? this.openPanels.push('details') : null;
      product.relatedProducts.length > 0 ? this.openPanels.push('related') : null;
    })
  );

  constructor(private _service: ItemService) {}
}
