import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRO } from './dto/product.response';

@Injectable()
export class ProductService {
  async create(createProductDto: CreateProductDto): Promise<ProductRO> {
    throw new NotImplementedException();
  }

  async findAll(): Promise<ProductRO[]> {
    throw new NotImplementedException();
  }

  async findOne(id: number): Promise<ProductRO> {
    throw new NotImplementedException();
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<ProductRO> {
    throw new NotImplementedException();
  }

  async remove(id: number): Promise<boolean> {
    throw new NotImplementedException();
  }

  async findAllByCategory(category: string): Promise<ProductRO[]> {
    throw new NotImplementedException();
  }
}
