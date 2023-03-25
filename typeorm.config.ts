import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './src/entities/user.entity';
import { Product } from './src/entities/product.entity';
import { Meal } from './src/entities/meal.entity';
import { MealItem } from './src/entities/mealItem.entity';
import { FoodPlan } from './src/entities/foodPlan.entity';
import { Category } from './src/entities/category.entity';

export const typeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      host: 'dpg-cgf306pmbg58h3ds1s8g-a',
      port: 5432,
      username: 'welcal_db_ja66_user',
      password: '16pU9ZA0O1V5rcCeY30E3Xvif222PT03',
      database: 'welcal_db_ja66',
      entities: [User, Product, Meal, MealItem, FoodPlan, Category],
      migrations: ['src/migrations/*.ts'],
      synchronize: true,
      ssl: true,
    };
  },
};
