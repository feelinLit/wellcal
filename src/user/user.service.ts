import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRO } from './dto/user.response';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto): Promise<UserRO> {
    throw new NotImplementedException();
  }

  async findAll(): Promise<UserRO[]> {
    throw new NotImplementedException();
  }

  async findOne(id: number): Promise<UserRO> {
    throw new NotImplementedException();
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserRO> {
    throw new NotImplementedException();
  }
}
