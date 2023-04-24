import { OmitType } from '@nestjs/swagger';
import { Product } from '../entities/product.entity';
import { UserRO } from '../../user/dto/user.response';
import { User } from '../../user/entities/user.entity';

export class ProductRO extends OmitType(Product, ['category', 'user']) {
  userId?: string;
}
