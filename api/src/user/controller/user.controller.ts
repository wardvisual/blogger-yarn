import { Controller, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Post()
  async findOne(@Query(':id', ParseIntPipe) id: number): Promise<User> {
    return await this.userService.findOne(id);
  }
}
