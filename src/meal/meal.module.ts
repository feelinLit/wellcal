import { Module } from '@nestjs/common';
import { MealService } from './meal.service';
import { MealController } from './meal.controller';
import { MealItemService } from './mealItem.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meal } from './entities/meal.entity';
import { FoodlogController } from './foodlog.controller';
import { FoodPlanModule } from '../food-plan/food-plan.module';
import { FoodPlanService } from '../food-plan/food-plan.service';
import { MealItem } from './entities/mealItem.entity';
import { ProductModule } from '../product/product.module';
import { ProductService } from '../product/product.service';
import { MealGateway } from './meal.gateway';
import { Product } from "../product/entities/product.entity";

@Module({
  imports: [
    FoodPlanModule,
    ProductModule,
    TypeOrmModule.forFeature([Meal, MealItem, Product]),
  ],
  controllers: [MealController, FoodlogController],
  providers: [MealService, MealItemService, FoodPlanService, ProductService, MealGateway],
})
export class MealModule {}
