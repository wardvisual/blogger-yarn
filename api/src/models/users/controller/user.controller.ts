import {
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
  Body,
} from '@nestjs/common';
import { UsersService } from '@/models/users/service/user.service';
import { UserEntity } from '@/models/users/entities/user.entity';
import { UserDto } from '@/models/users/dto/user.dto';

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
  async insert(@Body() user: UserDto): Promise<void> {
    await this.userService.insert(user);
  }
}
// curl -X POST -H "Content-Type: application/json"  -D '{"username": "linuz", "email": "dddsa@gmail.com", "password": "dsads", "role": "USER"}' http://localhost:3000/api/user
