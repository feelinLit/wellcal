import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { CategoryService } from './category.service';
import { TableoffoodsController } from './tableoffoods.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Category } from './entities/category.entity';
import { ProductGateway } from './product.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category])],
  controllers: [ProductController, TableoffoodsController],
  providers: [ProductService, CategoryService, ProductGateway],
  exports: [TypeOrmModule],
})
export class ProductModule {}
