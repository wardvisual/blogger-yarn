import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
  Req,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { UserEntity } from '../user/entities/user.entity';

@ApiTags('post')
@Controller('post')
@UseInterceptors(ClassSerializerInterceptor)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  public async create(
    @Body() createPostDto: CreatePostDto,
    @Req() request: Request,
  ) {
    return await this.postService.create(
      createPostDto,
      request.body.user as UserEntity,
    );
  }

  @Get()
  public async findAll(): Promise<PostEntity[]> {
    return await this.postService.findAll();
  }

  @Get(':id')
  public async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PostEntity> {
    return await this.postService.findOne(id);
  }

  @Patch(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return await this.postService.update(id, updatePostDto);
  }

  @Delete(':id')
  public async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.postService.remove(id);
  }
}
