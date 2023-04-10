import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Meal } from './meal.entity';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class MealItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unsigned: true })
  grams: number;

  @Column()
  mealId: number;

  @Column()
  productId: number;

  @ManyToOne(() => Meal, (meal) => meal.items)
  @JoinColumn({ name: 'mealId' })
  meal: Meal;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'productId' })
  product: Product;
}
