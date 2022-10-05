import { Module } from '@nestjs/common';
import { ConfigService } from '@/config/database/mysql/config.service';
import { PostModule } from '@/models/post/post.module';
import { CategoryModule } from '@/models/category/category.module';
import { UserModule } from '@/models/user/user.module';
import { AuthModule } from '@/authentication/auth.module';

@Module({
  providers: [ConfigService],
  exports: [ConfigService],
  imports: [UserModule, PostModule, CategoryModule, AuthModule],
})
export class ConfigModule {}
