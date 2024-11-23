import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.to';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepositpry: UsersRepository) {}
  async create(createUserDto: CreateUserDto) {
    return this.usersRepositpry.create(createUserDto);
  }
}
