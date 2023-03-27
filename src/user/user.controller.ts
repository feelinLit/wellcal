import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRO } from './dto/user.response';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserRO> {
    return await this.userService.create(createUserDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserRO> {
    return await this.userService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserRO> {
    return await this.userService.update(+id, updateUserDto);
  }
}
