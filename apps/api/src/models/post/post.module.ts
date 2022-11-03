import { Module } from '@nestjs/common';

import { PostController } from './post.controller';
import { PostEntity } from './entities/post.entity';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [TypeOrmModule.forFeature([PostEntity])],
  exports: [TypeOrmModule],
})
export class PostModule {}
