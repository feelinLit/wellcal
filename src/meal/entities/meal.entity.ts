import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MealItem } from './mealItem.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Meal {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  dateTime: Date;

  @OneToMany(() => MealItem, (item) => item.product)
  items: MealItem[];

  @ManyToOne(() => User, (user) => user.meals)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  userId: number;
}
