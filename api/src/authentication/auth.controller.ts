import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register-user.dto';
import { UserEntity } from '../models/user/entities/user.entity';
import { LoginDto } from './dto/login-user.dto';
import { HttpStatus } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  public register(@Body() user: RegisterDto): Promise<UserEntity> {
    return this.authService.register(user);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  public login(@Body() user: LoginDto): Promise<UserEntity> {
    return this.authService.login(user);
  }
}
