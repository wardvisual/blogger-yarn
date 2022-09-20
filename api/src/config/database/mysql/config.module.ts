import { Module } from '@nestjs/common';
import { ConfigService } from '@/config/database/mysql/config.service';
import { PostModule } from '@/models/post/post.module';

@Module({
  providers: [ConfigService],
  exports: [ConfigService],
  imports: [PostModule],
})
export class ConfigModule {}
