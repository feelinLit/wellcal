import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToOne(() => Category)
  category: Category;

  @Column({ unsigned: true })
  proteinsNumber: number;

  @Column({ unsigned: true })
  fatsNumber: number;

  @Column({ unsigned: true })
  carbsNumber: number;
}
