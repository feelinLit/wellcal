import { OmitType } from '@nestjs/swagger';
import { MealItem } from '../entities/mealItem.entity';
import { ProductRO } from "../../product/dto/product.response";

export class MealItemRO extends OmitType(MealItem, ['meal', 'product']) {
  product: ProductRO;
}
