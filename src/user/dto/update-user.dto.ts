import { CreateUserDto } from './create-user.dto';
import { ActivityLevel } from '../entities/user.entity';
import { PartialType } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  height?: number;

  weight?: number;

  gender?: boolean;

  activityLevel?: ActivityLevel;
}
