import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { NgbAccordionModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { ShopRoutingModule } from './shop-routing.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [ListComponent, ItemComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    NgbCarouselModule,
    NgbAccordionModule,
    TranslateModule,
    SharedModule,
    IvyCarouselModule,
  ],
})
export class ShopModule {}
