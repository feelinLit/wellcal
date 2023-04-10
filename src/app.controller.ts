import {
  Controller,
  Get,
  Query,
  Render,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoadTimeInterceptor } from './loadTime.interceptor';
import { ProductService } from './product/product.service';
import { Session } from './auth/session.decorator';
import { SessionContainer } from 'supertokens-node/recipe/session';

@UseInterceptors(LoadTimeInterceptor)
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly productService: ProductService,
  ) {}

  @Get()
  @Render('foodlog')
  root(@Session() session: SessionContainer) {
    return {};
  }

  // @Get(':date')
  // @Render('foodlog')
  // getFoodlogByDate(@Param('date') date: Date) {
  //
  // }

  @Get('calculator')
  @Render('calculator')
  getCalculator() {
    return {};
  }

  @Get('tableoffoods')
  @Render('tableoffoods')
  async findAll(@Query('categoryId') category?: string) {
    return this.productService
      .findAll(category)
      .then((result) => (result ? { products: result } : { products: [] }));
  }

  @Get('api/auth/callback/google')
  @Render('callback')
  async handle() {
    return { layout: false };
  }
}
