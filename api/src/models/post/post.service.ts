import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly repository: Repository<Post>,
  ) {}

  public async create(createPostDto: CreatePostDto) {
    const slug = createPostDto.title.split(' ').join('_').toLowerCase();

    return await this.repository.insert({ ...createPostDto, slug });
  }

  public async findAll() {
    return await this.repository.find();
  }

  public async findOne(id: number) {
    const postFromDatabase = await this.repository.findOne({ where: { id } });

    if (!postFromDatabase)
      throw new NotFoundException(`Post with an ID of ${id} was not found.`);

    return postFromDatabase;
  }

  public async update(id: number, updatePostDto: UpdatePostDto) {
    if (!(await this.findOne(id)))
      throw new NotFoundException(`Post with an ID of ${id} was not found.`);

    return this.repository.update(id, updatePostDto);
  }

  public async remove(id: number) {
    if (!(await this.findOne(id))) {
      throw new NotFoundException(`Post with an ID of ${id} was not found.`);
    }

    return await this.repository.delete(id);
  }
}
