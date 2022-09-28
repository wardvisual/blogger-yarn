import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';
import { Repository } from 'typeorm';
import { CategoryEntity } from '../category/entities/category.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  public async create(createPostDto: CreatePostDto, userId: number) {
    const post = new PostEntity();

    post.userId = userId;
    if (createPostDto.categoryId) {
      const category = await this.categoryRepository.findOne({
        where: { id: createPostDto.categoryId },
      });

      if (!category) throw new NotFoundException('Category not found');

      Object.assign(post.category, category);
    }

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
    } else {
      return await sqlQuery.getMany();
    }
  }

  public async findBySlug(slug: string) {
    const post = await this.postRepository.findOne({ where: { slug } });

    if (!post) {
      throw new NotFoundException(`post with slug ${slug} was not found.`);
    }

    return post;
  }

  public async findOne(id: number): Promise<PostEntity> {
    const postFromDb = await this.postRepository.findOne({ where: { id } });

    if (!postFromDb)
      throw new NotFoundException(`A post with an ID of ${id} was not found.`);

    return postFromDb;
  }

  public async update(id: number, updatePostDto: UpdatePostDto) {
    const postFromDb = await this.findOne(id);

    if (!postFromDb)
      throw new NotFoundException(`A post with an ID of ${id} was not found.`);

    postFromDb.updatedAt = new Date(Date.now());

    if (updatePostDto.categoryId) {
      const category = await this.categoryRepository.findOne({
        where: { id: updatePostDto.categoryId },
      });

      if (!category) throw new NotFoundException('Category not found');

      Object.assign(postFromDb.category, category);
    }

    Object.assign(postFromDb, updatePostDto);

    return await this.postRepository.save(postFromDb);
  }

  public async remove(id: number) {
    if (!(await this.findOne(id))) {
      throw new NotFoundException(`A post with an ID of ${id} was not found.`);
    }

    return await this.postRepository.delete(id);
  }
}
