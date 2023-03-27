import { Injectable, NotImplementedException } from '@nestjs/common';
import { UpdateMealItemDto } from './dto/update-mealItem.dto';
import { CreateMealItemDto } from './dto/create-mealItem.dto';
import { MealItemRO } from './dto/mealItem.response';

@Injectable()
export class MealItemService {
  async create(createMealItemDto: CreateMealItemDto): Promise<MealItemRO> {
    throw new NotImplementedException();
  }

  async findAllByMeal(mealId: number): Promise<MealItemRO[]> {
    throw new NotImplementedException();
  }

  async findAll(): Promise<MealItemRO[]> {
    throw new NotImplementedException();
  }

  async findOne(id: number): Promise<MealItemRO> {
    throw new NotImplementedException();
  }

  async update(
    id: number,
    updateMealItemDto: UpdateMealItemDto,
  ): Promise<MealItemRO> {
    throw new NotImplementedException();
  }

  async remove(id: number): Promise<boolean> {
    throw new NotImplementedException();
  }
}
