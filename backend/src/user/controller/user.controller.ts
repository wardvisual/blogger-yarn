import { Body, Controller, Post, Get, Delete, Param } from '@nestjs/common';
import { UserService } from '@/user/service/user.service';
import { UserDto } from '@/user/dto/createUser.dto';
import { Observable } from 'rxjs';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public create(@Body() user: UserDto): Observable<UserDto> {
    return this.userService.create(user);
  }

  @Get()
  public findAll(): Observable<UserDto[]> {
    return this.userService.findAll();
  }

  @Delete(':id')
  public deleteOne(@Param() { id }: UserDto): Observable<UserDto> {
    return this.userService.deleteOne(Number(id));
  }
}
