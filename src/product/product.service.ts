import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRO } from './dto/product.response';

@Injectable()
export class ProductService {
  async create(createProductDto: CreateProductDto): Promise<ProductRO> {
    throw new NotImplementedException();
  }

  async findAll(categoryName?: string): Promise<ProductRO[]> {
    const products: ProductRO[] = [
      {
        id: 1,
        categoryId: 1,
        name: 'Chicken breast',
        proteinsNumber: 31,
        fatsNumber: 4,
        carbsNumber: 0,
      },
      {
        id: 1,
        categoryId: 1,
        name: 'Egg',
        proteinsNumber: 6,
        fatsNumber: 5,
        carbsNumber: 1,
      },
      {
        id: 1,
        categoryId: 1,
        name: 'Brown rice',
        proteinsNumber: 2,
        fatsNumber: 1,
        carbsNumber: 23,
      },
    ];
    return products;
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
}
