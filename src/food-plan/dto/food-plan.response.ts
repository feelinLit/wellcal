import { OmitType } from '@nestjs/swagger';
import { FoodPlan } from '../entities/foodPlan.entity';

export class FoodPlanRO extends OmitType(FoodPlan, ['user']) {}
