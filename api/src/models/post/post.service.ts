import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  public async create(createPostDto: CreatePostDto, userId: number) {
    const post = new PostEntity();

    post.userId = userId;

    Object.assign(post, createPostDto);

    this.postRepository.create(post);

    return await this.postRepository.save(post);
  }

  public async findAll(query?: any) {
    const sqlQuery = this.postRepository
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
    }

    return await sqlQuery.getMany();
  }

  public async findBySlug(slug: string) {
    const post = await this.postRepository.findOne({ where: { slug } });

    if (!post) {
      throw new NotFoundException(`post with slug ${slug} was not found.`);
    }

    return post;
  }

  public async findOne(id: number): Promise<PostEntity> {
    const post = await this.postRepository.findOne({ where: { id } });

    if (!post)
      throw new NotFoundException(`A post with an ID of ${id} was not found.`);

    return post;
  }

  public async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.findOne(id);

    if (!post)
      throw new NotFoundException(`A post with an ID of ${id} was not found.`);

    post.updatedAt = new Date(Date.now());

    Object.assign(post, updatePostDto);

    return await this.postRepository.save(post);
  }

  public async remove(id: number) {
    if (!(await this.findOne(id))) {
      throw new NotFoundException(`A post with an ID of ${id} was not found.`);
    }

    return await this.postRepository.delete(id);
  }
}
