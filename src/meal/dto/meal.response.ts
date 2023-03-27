import { OmitType } from '@nestjs/swagger';
import { Meal } from '../entities/meal.entity';

export class MealRO extends OmitType(Meal, ['items', 'user']) {}
