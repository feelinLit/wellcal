import { OmitType, PartialType } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class CreateUserDto extends OmitType(PartialType(User), [
  'meals',
  'foodPlan',
  'id',
  'email',
  'name',
]) {
  id: string;
  email: string;
  name: string;
}
