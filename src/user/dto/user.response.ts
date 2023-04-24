import { OmitType } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class UserRO extends OmitType(User, ['meals', 'foodPlan']) {
  static fromModel(user: User): UserRO {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      height: user.height,
      weight: user.weight,
      gender: user.gender,
      activityLevel: user.activityLevel,
      foodPlanId: user.foodPlanId,
    };
  }
}
