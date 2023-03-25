import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { MealItem } from './mealItem.entity';
import { User } from './user.entity';

@Entity()
export class Meal {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  dateTime: Date;

  @OneToMany(() => MealItem, (item) => item.product)
  items: MealItem[];

  @ManyToOne(() => User, (user) => user.meals)
  user: User;
}
