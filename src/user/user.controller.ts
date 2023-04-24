import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Render,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRO } from './dto/user.response';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { Session } from '../auth/session.decorator';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { getUserById } from 'supertokens-node/lib/build/recipe/thirdparty';

@ApiTags('user')
@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Put()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserRO> {
    console.log(createUserDto);
    return await this.userService.create(createUserDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserRO> {
    return await this.userService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserRO> {
    return await this.userService.update(id, updateUserDto);
  }

  @Get('callback/google')
  @Render('callback')
  async handleAuth() {
    return { layout: false };
  }

  @UseGuards(new AuthGuard())
  @Get('auth/postAuth')
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

  @UseGuards(new AuthGuard())
  @Get('auth/refresh')
  @Render('refreshToken')
  async refreshToken(@Session() session: SessionContainer) {
    return { session: session.getAccessToken() };
  }
}
