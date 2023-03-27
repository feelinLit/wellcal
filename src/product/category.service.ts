import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryRO } from './dto/category.response';

@Injectable()
export class CategoryService {
  async createCategory(
    createCategoryDto: CreateCategoryDto,
  ): Promise<CategoryRO> {
    throw new NotImplementedException();
  }

  async findAllCategories(): Promise<CategoryRO[]> {
    throw new NotImplementedException();
  }

  async findOneCategory(id: number): Promise<CategoryRO> {
    throw new NotImplementedException();
  }

  async updateCategory(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<CategoryRO> {
    throw new NotImplementedException();
  }
}
