import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Render,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryService } from './category.service';
import { ProductRO } from './dto/product.response';
import { CategoryRO } from './dto/category.response';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { Session } from '../auth/session.decorator';
import { SessionContainer } from 'supertokens-node/recipe/session';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService,
  ) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<ProductRO> {
    return await this.productService.create(createProductDto);
  }

  @ApiQuery({ name: 'categoryId', required: false })
  @UseGuards(new AuthGuard())
  @Get()
  async findAll(
    @Session() session: SessionContainer,
    @Query('categoryId') categoryId?: number,
  ): Promise<ProductRO[]> {
    const userId = session.getUserId();
    return await this.productService.findAllByUser(userId, categoryId);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return await this.productService.remove(+id);
  }

  @Post('category')
  async createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<CategoryRO> {
    return await this.categoryService.createCategory(createCategoryDto);
  }

  @Get('category')
  async findAllCategories(): Promise<CategoryRO[]> {
    return await this.categoryService.findAllCategories();
  }
}
