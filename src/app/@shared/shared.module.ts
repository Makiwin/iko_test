import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { RelatedProductsPipe } from './pipes/related-products.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, RelatedProductsPipe],
  exports: [LoaderComponent, RelatedProductsPipe],
})
export class SharedModule {}
