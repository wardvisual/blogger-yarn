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
  Query,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('post')
@Controller('post')
@UseInterceptors(ClassSerializerInterceptor)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  public async create(
    @Body() createPostDto: CreatePostDto,
    @Body() userId: number,
  ) {
    return await this.postService.create(createPostDto, userId);
  }

  @Get()
  public findAll(@Query() query: any) {
    return this.postService.findAll(query);
  }

  @Get('/slug/:slug')
  public async findBySlug(@Param('slug') slug: string) {
    return await this.postService.findBySlug(slug);
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
