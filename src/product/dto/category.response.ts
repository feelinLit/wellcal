import { Category } from '../entities/category.entity';
import { OmitType } from '@nestjs/swagger';

export class CategoryRO extends OmitType(Category, ['products']) {}
