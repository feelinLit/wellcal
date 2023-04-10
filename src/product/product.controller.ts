import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
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

@ApiTags('product')
@Controller('api/product')
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
  async findAll(@Query('categoryId') category?: string): Promise<ProductRO[]> {
    return this.productService.findAll(category);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<ProductRO> {
    return await this.productService.update(+id, updateProductDto);
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

  @Patch('category/:id')
  async updateCategory(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<CategoryRO> {
    return await this.categoryService.updateCategory(+id, updateCategoryDto);
  }
}
