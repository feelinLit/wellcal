import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRO } from './dto/product.response';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { In, IsNull, Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<ProductRO> {
    return await this.productRepository.save(createProductDto);
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

  async remove(id: number): Promise<boolean> {
    console.log(id);
    await this.productRepository.delete(id);
    return true;
  }

  async findAllByUser(
    userId: string,
    categoryId?: number,
  ): Promise<ProductRO[]> {
    return categoryId
      ? await this.productRepository.findBy([
          { userId: userId, categoryId: categoryId },
          { userId: IsNull(), categoryId: categoryId },
        ])
      : await this.productRepository.findBy([
          { userId: userId },
          { userId: IsNull() },
        ]);
  }
}
