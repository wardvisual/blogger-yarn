import { Module } from '@nestjs/common';
import { BlogController } from '@/blog/controller/blog.controller';
import { BlogService } from '@/blog/service/blog.service';

@Module({
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
