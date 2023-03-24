import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { FoodPlan } from './foodPlan.entity';

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
  @JoinColumn()
  plan: FoodPlan;
}
