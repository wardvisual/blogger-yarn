import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { LoginDto } from '../dto/login-user.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email', passReqToCalback: false });
  }

  async validate(username: string, password: string): Promise<LoginDto> {
    const user = await this.authService.login(username, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
