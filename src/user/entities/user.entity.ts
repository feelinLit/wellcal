import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FoodPlan } from '../../food-plan/entities/foodPlan.entity';
import { Meal } from '../../meal/entities/meal.entity';

export enum ActivityLevel {
  SEDENTARY = 'Sedentary',
  LIGHTLY_ACTIVE = 'LightlyActive',
  MODERATELY_ACTIVE = 'ModeratelyActive',
  VERY_ACTIVE = 'VeryActive',
  EXTREMELY_ACTIVE = 'ExtremelyActive',
}

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unsigned: true, nullable: true })
  height?: number;

  @Column({ unsigned: true, nullable: true })
  weight?: number;

  @Column({ nullable: true })
  gender?: boolean;

  @Column({
    type: 'enum',
    enum: ActivityLevel,
    default: ActivityLevel.LIGHTLY_ACTIVE,
    nullable: true,
  })
  activityLevel?: ActivityLevel;

  @OneToOne(() => FoodPlan)
  @JoinColumn({ name: 'foodPlanId' })
  foodPlan?: FoodPlan;

  @Column({ nullable: true })
  foodPlanId?: number;

  @OneToMany(() => Meal, (meal) => meal.user)
  meals: Meal[];
}
