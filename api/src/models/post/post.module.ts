import { Module } from '@nestjs/common';

import { PostController } from './post.controller';
import { PostEntity } from './entities/post.entity';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from '../category/entities/category.entity';

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [TypeOrmModule.forFeature([PostEntity, CategoryEntity])],
  exports: [TypeOrmModule],
})
export class PostModule {}
