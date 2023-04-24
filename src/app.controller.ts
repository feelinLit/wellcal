import {
  Controller,
  Get,
  Query,
  Render,
  Res,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoadTimeInterceptor } from './loadTime.interceptor';
import { ProductService } from './product/product.service';
import { Session } from './auth/session.decorator';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { MealService } from './meal/meal.service';
import { AuthGuard } from './auth/auth.guard';
import { getUserById } from 'supertokens-node/lib/build/recipe/thirdparty';
import { UserService } from './user/user.service';
import { Response } from 'express';
import { UserRO } from './user/dto/user.response';

@UseInterceptors(LoadTimeInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(new AuthGuard({ sessionRequired: false }))
  @Get()
  async root(@Res() res: Response, @Session() session?: SessionContainer) {
    const userId = session?.getUserId();
    return !userId ? res.render('signIn', {}) : res.redirect('/foodlog');
  }
}
