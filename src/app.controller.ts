import { Controller, Get, Res, UseInterceptors } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { LoadTimeInterceptor } from './loadTime.interceptor';

@UseInterceptors(LoadTimeInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(@Res() res: Response) {
    return res.render('foodlog', {
      authenticated: false,
    });
  }

  @Get('calculator')
  getCalculator(@Res() res: Response) {
    return res.render('calculator', {
      authenticated: false,
    });
  }

  @Get('tableoffoods')
  getTableOfFoods(@Res() res: Response) {
    return res.render('tableoffoods', {
      authenticated: false,
    });
  }
}
