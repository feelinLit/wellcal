import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateMealDto } from './dto/create-meal.dto';
import { MealRO } from './dto/meal.response';

@Injectable()
export class MealService {
  async create(createMealDto: CreateMealDto): Promise<MealRO> {
    throw new NotImplementedException();
  }

  async findAll(): Promise<MealRO[]> {
    throw new NotImplementedException();
  }

  async findOne(id: number): Promise<MealRO> {
    throw new NotImplementedException();
  }

  async remove(id: number): Promise<boolean> {
    throw new NotImplementedException();
  }

  async findAllByUser(userId: number): Promise<MealRO[]> {
    throw new NotImplementedException();
  }
}
