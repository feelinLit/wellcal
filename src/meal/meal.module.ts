import { Module } from '@nestjs/common';
import { MealService } from './meal.service';
import { MealController } from './meal.controller';
import { MealItemService } from './mealItem.service';

@Module({
  controllers: [MealController],
  providers: [MealService, MealItemService],
})
export class MealModule {}
