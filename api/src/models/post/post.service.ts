import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';
import { Repository } from 'typeorm';
import { StringHelper } from '@/common/helpers/string.helper';
import { UserEntity } from '../user/entities/user.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly repository: Repository<PostEntity>,
  ) {}

  public async create(createPostDto: CreatePostDto, user: UserEntity) {
    const post = new PostEntity();

    post.userId = 1;
    post.categoryId = 5;

    Object.assign(post, createPostDto);

    this.repository.create(post);

    return await this.repository.save(post);
  }

  public async findAll(query?: any) {
    const sqlQuery = this.repository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.category', 'category')
      .leftJoinAndSelect('post.user', 'user');

    if (!(Object.keys(query).length === 0) && query.constructor === Object) {
      const queries = Object.keys(query);

      // filter with title keys
      if (queries.includes('title')) {
        sqlQuery.where('post.title LIKE :title', {
          title: `%${query['title']}%`,
        });
      }

      // sort by title field
      if (queries.includes('sort')) {
        sqlQuery.orderBy('post.title', query['sort'].toUpperCase());
      }

      // show only selected category items
      if (queries.includes('category')) {
        sqlQuery.andWhere('category.title = :category', {
          category: query['category'],
        });
      }

      return await sqlQuery.getMany();
    } else {
      return await sqlQuery.getMany();
    }
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
