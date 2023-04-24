import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateMealDto } from './dto/create-meal.dto';
import { MealRO } from './dto/meal.response';
import { InjectRepository } from '@nestjs/typeorm';
import { Meal } from './entities/meal.entity';
import { Between, MoreThan, Repository } from 'typeorm';

@Injectable()
export class MealService {
  constructor(
    @InjectRepository(Meal) private mealRepository: Repository<Meal>,
  ) {}

  async create(createMealDto: CreateMealDto): Promise<MealRO> {
    return await this.mealRepository.save(createMealDto);
  }

  async findOne(id: number): Promise<MealRO> {
    throw new NotImplementedException();
  }

  async remove(id: number): Promise<boolean> {
    throw new NotImplementedException();
  }

  async findAllByUserAndDate(userId: string, date: Date): Promise<Meal[]> {
    const dateWithoutTime = this.getDateWithoutTime(date);
    const nextDay = this.getNextDay(dateWithoutTime);

    return await this.mealRepository.find({
      where: {
        userId: userId,
        dateTime: Between(dateWithoutTime, nextDay),
      },
      relations: ['mealItems', 'mealItems.product'],
    });
  }

  private getDateWithoutTime(date?: Date): Date {
    return date
      ? new Date(new Date(date).setHours(0, 0, 0, 0))
      : new Date(new Date().setHours(0, 0, 0, 0));
  }

  private getNextDay(date: Date): Date {
    return this.getDateWithoutTime(
      new Date(new Date().setDate(date.getDate() + 1)),
    );
  }
}
