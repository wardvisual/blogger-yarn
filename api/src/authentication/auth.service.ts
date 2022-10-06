import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from './dto/register-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '@/models/user/entities/user.entity';
import { LoginDto } from './dto/login-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { JwtPayload } from './interfaces/jwt-payload.interface';
import { AuthUser } from '@/models/user/user.decorator';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../models/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public async register(registerDto: RegisterDto): Promise<UserEntity> {
    return await this.userService.create(registerDto);
  }

  public async login(username: string, password: string): Promise<UserEntity> {
    const user = await this.userService.findOne({
      where: { email: username },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (!(await user.checkPassword(password))) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return user;
  }

  public async verifyPayload(payload: JwtPayload): Promise<UserEntity> {
    const user = await this.userService.findOne({
      where: { email: payload.sub },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email address');
    }

    return user;
  }

  public signToken(user: UserEntity): string {
    const payload = { sub: user.email };

    return this.jwtService.sign(payload);
  }
}
