import { Module } from '@nestjs/common';
import { FoodPlanService } from './food-plan.service';
import { FoodPlanController } from './food-plan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodPlan } from './entities/foodPlan.entity';
import { User } from '../user/entities/user.entity';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([FoodPlan, User]), UserModule],
  controllers: [FoodPlanController],
  providers: [FoodPlanService, UserService],
  exports: [TypeOrmModule],
})
export class FoodPlanModule {}
