import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { User } from './src/user/entities/user.entity';
import { Product } from './src/product/entities/product.entity';
import { Meal } from './src/meal/entities/meal.entity';
import { MealItem } from './src/meal/entities/mealItem.entity';
import { FoodPlan } from './src/food-plan/entities/foodPlan.entity';
import { Category } from './src/product/entities/category.entity';

export const typeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
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
