import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { LoginDto } from '../dto/login-user.dto';
import { UserEntity } from '../../models/user/entities/user.entity';

export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email', passReqToCalback: false });
  }

  public validate(loginDto: LoginDto): Promise<UserEntity> {
    return this.authService.login(loginDto);
  }
}
