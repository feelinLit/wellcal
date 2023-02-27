import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { LoadTimeInterceptor } from './loadTime.interceptor';

@UseInterceptors(LoadTimeInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('foodlog')
  root() {
    return {
      authenticated: false,
    };
  }

  @Get('calculator')
  @Render('calculator')
  getCalculator() {
    return {
      authenticated: false,
    };
  }

  @Get('tableoffoods')
  @Render('tableoffoods')
  getTableOfFoods() {
    return {
      authenticated: false,
    };
  }
}
