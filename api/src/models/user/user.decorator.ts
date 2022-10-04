import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';

export const AuthUser = createParamDecorator(
  (data: keyof UserEntity, ctx: ExecutionContext) => {
    const user = ctx.switchToHttp().getRequest<Request>()['user'] as UserEntity;

    return data ? user && user[data] : user;
  },
);
