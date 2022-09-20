import { Module } from '@nestjs/common';

import { PostController } from './post.controller';
import { Post } from './entities/post.entity';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [TypeOrmModule.forFeature([Post])],
  exports: [TypeOrmModule],
})
export class PostModule {}
