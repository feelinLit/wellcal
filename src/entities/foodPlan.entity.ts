import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class FoodPlan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unsigned: true })
  proteinsLimit: number;

  @Column({ unsigned: true })
  fatsLimit: number;

  @Column({ unsigned: true })
  carbsLimit: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
