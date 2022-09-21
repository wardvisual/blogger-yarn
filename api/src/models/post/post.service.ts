import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';
import { Repository } from 'typeorm';
import { StringHelper } from '@/common/helpers/string.helper';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly repository: Repository<PostEntity>,
  ) {}

  public async create(createPostDto: CreatePostDto) {
    const slug = StringHelper.toSlug(createPostDto.title);
    const title = StringHelper.toTitleCase(createPostDto.title);

    return await this.repository.insert({ ...createPostDto, title, slug });
  }

  public async findAll(): Promise<PostEntity[]> {
    return await this.repository.find();
  }

  public async findOne(id: number): Promise<PostEntity> {
    const postFromDatabase = await this.repository.findOne({ where: { id } });

    if (!postFromDatabase)
      throw new NotFoundException(`A Post with an ID of ${id} was not found.`);

    return postFromDatabase;
  }

  public async update(id: number, updatePostDto: UpdatePostDto) {
    if (!(await this.findOne(id)))
      throw new NotFoundException(`A Post with an ID of ${id} was not found.`);

    const slug = StringHelper.toSlug(updatePostDto.title);
    const title = StringHelper.toTitleCase(updatePostDto.title);

    return this.repository.update(id, { ...updatePostDto, title, slug });
  }

  public async remove(id: number) {
    if (!(await this.findOne(id))) {
      throw new NotFoundException(`A Post with an ID of ${id} was not found.`);
    }

    return await this.repository.delete(id);
  }
}
