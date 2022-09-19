import { Module } from '@nestjs/common';
import { ConfigService } from '@/config/database/mysql/config.service';
import { UsersModule } from '@/models/users/user.module';

@Module({
  providers: [ConfigService],
  exports: [ConfigService],
  imports: [UsersModule],
})
export class ConfigModule {}
