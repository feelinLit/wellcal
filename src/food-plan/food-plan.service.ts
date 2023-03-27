import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateFoodPlanDto } from './dto/create-food-plan.dto';
import { FoodPlanRO } from './dto/food-plan.response';

@Injectable()
export class FoodPlanService {
  async create(createFoodPlanDto: CreateFoodPlanDto): Promise<FoodPlanRO> {
    throw new NotImplementedException();
  }

  async findAll(): Promise<FoodPlanRO[]> {
    throw new NotImplementedException();
  }

  async findOne(id: number): Promise<FoodPlanRO> {
    throw new NotImplementedException();
  }

  async findAllByUser(userId: number): Promise<FoodPlanRO[]> {
    throw new NotImplementedException();
  }
}
