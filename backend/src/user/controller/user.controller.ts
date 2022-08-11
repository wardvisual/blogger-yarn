import { Body, Controller, Post, Get, Delete, Param } from '@nestjs/common';
import { UserService } from '@/user/service/user.service';
import { UserDto } from '@/user/dto/createUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public createUser(@Body() user: UserDto) {
    return this.userService.createUser(user);
  }

  @Get()
  public getUsers() {
    return this.userService.getUsers();
  }

  @Delete(':id')
  public deleteUser(@Param() { id }: UserDto) {
    return this.userService.deleteUser(Number(id));
  }
}
