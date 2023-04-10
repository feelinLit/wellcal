import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmModuleAsyncOptions } from '../typeorm.config';
import { MealModule } from './meal/meal.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { FoodPlanModule } from './food-plan/food-plan.module';
import { ProductService } from './product/product.service';
import { AuthModule } from './auth/auth.module';
import * as SuperTokensConfig from './config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmModuleAsyncOptions),
    UserModule,
    ProductModule,
    FoodPlanModule,
    MealModule,
    AuthModule.forRoot({
      connectionURI: SuperTokensConfig.connectionUri,
      apiKey: SuperTokensConfig.apiKey,
      appInfo: SuperTokensConfig.appInfo,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ProductService],
})
export class AppModule {}
