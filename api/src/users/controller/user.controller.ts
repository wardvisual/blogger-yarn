import {
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
  Body,
} from '@nestjs/common';
import { UsersService } from '@/users/service/user.service';
import { UserEntity } from '@/users/entities/user.entity';
import { UserDto } from '@/users/dto/user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }

  @Post(':id')
  async findOne(@Query(':id', ParseIntPipe) id: number): Promise<UserEntity> {
    return await this.userService.findOne(id);
  }

  @Post()
  async insert(@Body() user: UserDto): Promise<UserEntity> {
    return await this.userService.insert(user);
  }
}
