import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRO } from './dto/user.response';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserRO> {
    console.log(createUserDto);
    return await this.userRepository.save(createUserDto);
  }

  async findAll(): Promise<UserRO[]> {
    throw new NotImplementedException();
  }

  async findOne(id: string): Promise<UserRO> {
    const user = await this.userRepository.findOneBy({ id: id });
    return user ? UserRO.fromModel(user) : null;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserRO> {
    throw new NotImplementedException();
  }
}
