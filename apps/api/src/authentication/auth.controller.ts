import {
  Controller,
  Post,
  Body,
  HttpCode,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register-user.dto';
import { UserEntity } from '../models/user/entities/user.entity';
import { LoginDto } from './dto/login-user.dto';
import { HttpStatus } from '@nestjs/common';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { AuthUser } from '@/models/user/user.decorator';

ApiTags('auth');
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(TokenInterceptor)
  public async register(@Body() user: RegisterDto): Promise<UserEntity> {
    return await this.authService.register(user);
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(TokenInterceptor)
  public async login(@Body() user: LoginDto): Promise<UserEntity> {
    return await this.authService.login(user.email, user.password);
  }
}
