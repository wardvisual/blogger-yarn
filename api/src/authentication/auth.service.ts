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

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
  ) {}

  public async register(registerDto: RegisterDto): Promise<UserEntity> {
    const user = this.userRepository.create(registerDto);

    return user;
  }

  public async login(loginDto: LoginDto): Promise<UserEntity> {
    console.log({ loginDto: loginDto.email, pass: loginDto.password });

    const user = await this.userRepository.findOne({
      where: { email: loginDto.email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // const isMatch = await user.checkPassword(loginDto.password);

    // if (!isMatch) {
    //   throw new UnauthorizedException('Invalid email or password');
    // }

    return user;
  }

  public async verifyPayload(payload: JwtPayload): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
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
