import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmModuleAsyncOptions } from '../typeorm.config';
import { MealModule } from './meal/meal.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { FoodPlanModule } from './food-plan/food-plan.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(typeOrmModuleAsyncOptions),
    UserModule,
    ProductModule,
    FoodPlanModule,
    MealModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
