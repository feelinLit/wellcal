import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  Column,
} from 'typeorm';
import { Meal } from './meal.entity';
import { Product } from './product.entity';

@Entity()
export class MealItem {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  dateTime: Date;

  @Column({ unsigned: true })
  grams: number;

  @Column()
  mealId: number;

  @Column()
  productId: number;

  @ManyToOne(() => Meal, (meal) => meal.items)
  meal: Meal;

  @ManyToOne(() => Product)
  product: Product;
}
