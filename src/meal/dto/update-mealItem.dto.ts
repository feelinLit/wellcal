import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateMealItemDto } from './create-mealItem.dto';

export class UpdateMealItemDto extends OmitType(
  PartialType(CreateMealItemDto),
  ['productId'],
) {}
