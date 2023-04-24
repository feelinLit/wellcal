import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Render,
  UseGuards,
} from '@nestjs/common';
import { MealService } from './meal.service';
import { MealItemService } from './mealItem.service';
import { CreateMealDto } from './dto/create-meal.dto';
import { MealRO } from './dto/meal.response';
import { AuthGuard } from '../auth/auth.guard';
import { Session } from '../auth/session.decorator';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { FoodPlanService } from '../food-plan/food-plan.service';
import { ProductService } from '../product/product.service';

@ApiTags('foodlog')
@Controller('foodlog')
export class FoodlogController {
  constructor(
    private readonly mealService: MealService,
    private readonly mealItemService: MealItemService,
    private readonly foodPlanService: FoodPlanService,
    private readonly productService: ProductService,
  ) {}

  @Get(':date?')
  @UseGuards(new AuthGuard())
  @Render('foodlog')
  async getFoodlogByDate(
    @Session() session: SessionContainer,
    @Param('date') date?: string,
  ) {
    const userId = session.getUserId();

    let givenDate = date
      ? new Date(date)
      : new Date(new Date().setHours(0, 0, 0, 0));
    if (givenDate.getTime() > new Date().setHours(0, 0, 0, 0)) {
      givenDate = this.getDateWithoutTime();
    }

    const meals = await this.mealService.findAllByUserAndDate(
      userId,
      givenDate,
    );
    const foodPlan = await this.foodPlanService.findOneByUser(userId);
    const products = await this.productService.findAllByUser(userId);

    let proteinsNumber = 0;
    let carbsNumber = 0;
    let fatsNumber = 0;
    meals.forEach((m) => {
      m.mealItems.forEach((mi) => {
        proteinsNumber += mi.product.proteinsNumber;
        carbsNumber += mi.product.carbsNumber;
        fatsNumber += mi.product.fatsNumber;
      });
    });

    return {
      meals,
      foodPlan,
      date: givenDate,
      userId,
      products,
      proteinsNumber,
      carbsNumber,
      fatsNumber,
    };
  }

  private getDateWithoutTime(date?: string): Date {
    const d = date
      ? new Date(new Date(date).setHours(0, 0, 0, 0))
      : new Date(new Date().setHours(0, 0, 0, 0));
    console.log(d);
    return d;
  }
}
