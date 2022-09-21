import { Module } from '@nestjs/common';
import { ConfigService } from '@/config/database/mysql/config.service';
import { PostModule } from '@/models/post/post.module';
import { CategoryModule } from '@/models/category/category.module';
import { UserModule } from '@/models/user/user.module';

@Module({
  providers: [ConfigService],
  exports: [ConfigService],
  imports: [UserModule, PostModule, CategoryModule],
})
export class ConfigModule {}
