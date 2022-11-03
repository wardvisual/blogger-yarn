import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { UserEntity } from '@/models/user/entities/user.entity';
import { Response } from 'express';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class TokenInterceptor implements NestInterceptor {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: NestConfigService
  ) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<UserEntity> {
    return next.handle().pipe(
      map(user => {
        const response = context.switchToHttp().getResponse<Response>();
        const token = this.authService.signToken(user);

        response.setHeader('Authorization', `Bearer ${token}`);
        response.cookie('token', token, {
          httpOnly: this.configService.get('NODE_ENV') === 'development',
          signed: true,
          sameSite: 'strict',
          secure: this.configService.get('NODE_ENV') === 'development',
        });

        return user;
      })
    );
  }
}
