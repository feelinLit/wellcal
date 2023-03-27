import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MealService } from './meal.service';
import { CreateMealDto } from './dto/create-meal.dto';
import { CreateMealItemDto } from './dto/create-mealItem.dto';
import { MealItemService } from './mealItem.service';
import { UpdateMealItemDto } from './dto/update-mealItem.dto';
import { MealRO } from './dto/meal.response';
import { MealItemRO } from './dto/mealItem.response';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('meal')
@Controller('api/meal')
export class MealController {
  constructor(
    private readonly mealService: MealService,
    private readonly mealItemService: MealItemService,
  ) {}

  @Post()
  async create(@Body() createMealDto: CreateMealDto): Promise<MealRO> {
    return await this.mealService.create(createMealDto);
  }

  @ApiQuery({ name: 'userId', required: false })
  @Get()
  async findAll(@Query('userId') userId?: string): Promise<MealRO[]> {
    if (userId !== null) {
      return await this.mealService.findAllByUser(+userId);
    } else {
      return await this.mealService.findAll();
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return await this.mealService.remove(+id);
  }

  @Post('item')
  async createMealItem(
    @Body() createMealItemDto: CreateMealItemDto,
  ): Promise<MealItemRO> {
    return await this.mealItemService.create(createMealItemDto);
  }

  @ApiQuery({ name: 'mealId', required: false })
  @Get('item')
  async findAllMealItems(
    @Query('userId') mealId?: string,
  ): Promise<MealItemRO[]> {
    if (mealId !== null) {
      return await this.mealItemService.findAllByMeal(+mealId);
    } else {
      return await this.mealItemService.findAll();
    }
  }

  @Patch('item/:id')
  async updateItem(
    @Param('id') id: string,
    @Body() updateMealItemDto: UpdateMealItemDto,
  ): Promise<MealItemRO> {
    return await this.mealItemService.update(+id, updateMealItemDto);
  }

  @Delete('item/:id')
  async removeItem(@Param('id') id: string): Promise<boolean> {
    return await this.mealItemService.remove(+id);
  }
}
