import { Color } from './color.model';
import { Size } from './size.model';

export interface ProductModel {
  productId: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  sizes?: Size[];
  color?: Color[];
  relatedProducts: number[];
}
