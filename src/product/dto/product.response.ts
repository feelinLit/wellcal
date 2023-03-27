import { OmitType } from '@nestjs/swagger';
import { Product } from '../entities/product.entity';

export class ProductRO extends OmitType(Product, ['category']) {}
