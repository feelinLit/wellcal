import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { FoodPlanService } from './food-plan.service';
import { CreateFoodPlanDto } from './dto/create-food-plan.dto';
import { FoodPlanRO } from './dto/food-plan.response';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('food-plan')
@Controller('api/food-plan')
export class FoodPlanController {
  constructor(private readonly foodPlanService: FoodPlanService) {}

  @Post()
  async create(
    @Body() createFoodPlanDto: CreateFoodPlanDto,
  ): Promise<CreateFoodPlanDto> {
    return await this.foodPlanService.create(createFoodPlanDto);
  }

  @ApiQuery({ name: 'userId', required: false })
  @Get()
  async findAll(@Query('userId') userId?: string): Promise<FoodPlanRO[]> {
    if (userId !== null) {
      return await this.foodPlanService.findAllByUser(+userId);
    } else {
      return await this.foodPlanService.findAll();
    }
  }
}
