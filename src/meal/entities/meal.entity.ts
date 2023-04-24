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

  @CreateDateColumn({ type: 'timestamp with time zone' })
  dateTime: Date;

  @OneToMany(() => MealItem, (item) => item.meal)
  mealItems: MealItem[];

  @ManyToOne(() => User, (user) => user.meals)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  userId: string;
}
