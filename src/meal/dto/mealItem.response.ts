import { OmitType } from '@nestjs/swagger';
import { MealItem } from '../entities/mealItem.entity';

export class MealItemRO extends OmitType(MealItem, ['meal', 'product']) {}
