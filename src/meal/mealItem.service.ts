import { Injectable, NotImplementedException } from '@nestjs/common';
import { UpdateMealItemDto } from './dto/update-mealItem.dto';
import { CreateMealItemDto } from './dto/create-mealItem.dto';
import { MealItemRO } from './dto/mealItem.response';
import { InjectRepository } from '@nestjs/typeorm';
import { MealItem } from './entities/mealItem.entity';
import { Repository } from 'typeorm';
import { Product } from '../product/entities/product.entity';

@Injectable()
export class MealItemService {
  constructor(
    @InjectRepository(MealItem)
    private mealItemRepository: Repository<MealItem>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  async create(createMealItemDto: CreateMealItemDto): Promise<MealItemRO> {
    const mealItem = await this.mealItemRepository.save(createMealItemDto);
    const product = await this.productRepository.findOneBy({
      id: createMealItemDto.productId,
    });
    return { ...mealItem, product };
  }

  async findAllByMeal(mealId: number): Promise<MealItemRO[]> {
    throw new NotImplementedException();
  }

  async findAll(): Promise<MealItemRO[]> {
    throw new NotImplementedException();
  }

  async findOne(id: number): Promise<MealItemRO> {
    throw new NotImplementedException();
  }

  async update(
    id: number,
    updateMealItemDto: UpdateMealItemDto,
  ): Promise<MealItemRO> {
    throw new NotImplementedException();
  }

  async remove(id: number): Promise<boolean> {
    throw new NotImplementedException();
  }
}
