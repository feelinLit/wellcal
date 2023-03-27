import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FoodPlan } from '../../food-plan/entities/foodPlan.entity';
import { Meal } from '../../meal/entities/meal.entity';

export enum ActivityLevel {
  SEDENTARY,
  LIGHTLY_ACTIVE,
  MODERATELY_ACTIVE,
  VERY_ACTIVE,
  EXTREMELY_ACTIVE,
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ unsigned: true })
  height: number;

  @Column({ unsigned: true })
  weight: number;

  @Column()
  gender: boolean;

  @Column({
    type: 'enum',
    enum: ActivityLevel,
    default: ActivityLevel.LIGHTLY_ACTIVE,
  })
  activityLevel: ActivityLevel;

  @OneToOne(() => FoodPlan)
  @JoinColumn({ name: 'planId' })
  plan: FoodPlan;

  @Column()
  planId: number;

  @OneToMany(() => Meal, (meal) => meal.user)
  meals: Meal[];
}
