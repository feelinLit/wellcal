import { OmitType } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class UserRO extends OmitType(User, ['password', 'meals', 'foodPlan']) {}
