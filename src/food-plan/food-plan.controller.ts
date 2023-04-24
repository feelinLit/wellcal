import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Render,
  UseGuards,
} from '@nestjs/common';
import { FoodPlanService } from './food-plan.service';
import { CreateFoodPlanDto } from './dto/create-food-plan.dto';
import { FoodPlanRO } from './dto/food-plan.response';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { Session } from '../auth/session.decorator';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { getUserById } from 'supertokens-node/lib/build/recipe/thirdparty';
import { UserRO } from '../user/dto/user.response';
import { UserService } from '../user/user.service';

@ApiTags('Food Plan')
@Controller('foodplan')
export class FoodPlanController {
  constructor(
    private readonly foodPlanService: FoodPlanService,
    private readonly userService: UserService,
  ) {}

  @Post()
  async create(
    @Body() createFoodPlanDto: CreateFoodPlanDto,
  ): Promise<CreateFoodPlanDto> {
    return await this.foodPlanService.create(createFoodPlanDto);
  }

  @UseGuards(new AuthGuard())
  @Get('calculator')
  @Render('calculator')
  async getPostAuth(@Session() session: SessionContainer) {
    const userId = session.getUserId();
    const email = (await getUserById(userId)).email;
    return this.userService.findOne(userId).then((user: UserRO) =>
      user
        ? {
            authenticated: true,
            name: user.name,
            id: userId,
            email: email,
          }
        : {
            authenticated: false,
            id: userId,
            email: email,
          },
    );
  }
}
