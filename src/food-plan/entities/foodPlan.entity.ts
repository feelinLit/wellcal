import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class FoodPlan {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  dateTime: Date;

  @Column({ unsigned: true })
  proteinsLimit: number;

  @Column({ unsigned: true })
  fatsLimit: number;

  @Column({ unsigned: true })
  carbsLimit: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  userId: string;
}
