import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateFoodPlanDto } from './dto/create-food-plan.dto';
import { FoodPlanRO } from './dto/food-plan.response';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FoodPlan } from './entities/foodPlan.entity';
import { User } from '../user/entities/user.entity';

@Injectable()
export class FoodPlanService {
  constructor(
    @InjectRepository(FoodPlan)
    private foodPlanRepository: Repository<FoodPlan>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createFoodPlanDto: CreateFoodPlanDto): Promise<FoodPlanRO> {
    console.log(createFoodPlanDto);
    const foodPlan = await this.foodPlanRepository.save(createFoodPlanDto);
    await this.userRepository.save({
      id: createFoodPlanDto.userId,
      foodPlan: foodPlan,
      foodPlanId: foodPlan.id,
    });
    return foodPlan;
  }

  async findOne(id: number): Promise<FoodPlanRO> {
    throw new NotImplementedException();
  }

  async findOneByUser(userId: string): Promise<FoodPlanRO> {
    return await this.foodPlanRepository.findOneBy({ userId: userId });
  }
}
