import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { ItemService } from './item/item.service';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    data: {},
  },
  {
    path: ':id',
    component: ItemComponent,
    resolve: {
      data: ItemService,
    },
    data: {},
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
