import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MealItem } from './mealItem.entity';

@Entity()
export class Meal {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => MealItem, (item) => item.product)
  items: MealItem[];
}
