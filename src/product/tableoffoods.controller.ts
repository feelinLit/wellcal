import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Render, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { AuthGuard } from '../auth/auth.guard';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { Session } from '../auth/session.decorator';

@ApiTags('table of foods')
@Controller('tableoffoods')
export class TableoffoodsController {
  constructor(
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService,
  ) {}

  @Get()
  @UseGuards(new AuthGuard())
  @Render('tableoffoods')
  async getTableOfFoods(@Session() session: SessionContainer) {
    const userId = session.getUserId();
    const products = await this.productService.findAllByUser(userId);
    return { products, userId };
  }
}
