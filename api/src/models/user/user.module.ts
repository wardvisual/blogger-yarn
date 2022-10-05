import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

@Module({
  controllers: [],
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [TypeOrmModule, UserService],
})
export class UserModule {}
