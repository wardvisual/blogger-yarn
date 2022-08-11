import { Module } from '@nestjs/common';
import { UserController } from '@/user/controller/user.controller';
import { UserService } from '@/user/service/user.service';

@Module({
  controllers: [UserController],
  imports: [],
  providers: [UserService],
})
export class UserModule {}
