import { Module } from '@nestjs/common';
import { FoodPlanService } from './food-plan.service';
import { FoodPlanController } from './food-plan.controller';

@Module({
  controllers: [FoodPlanController],
  providers: [FoodPlanService],
})
export class FoodPlanModule {}
