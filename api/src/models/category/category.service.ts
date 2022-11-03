import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly repository: Repository<CategoryEntity>
  ) {}

  public async create(createCategoryDto: CreateCategoryDto) {
    const category = new CategoryEntity();

    Object.assign(category, createCategoryDto);

    this.repository.create(category);

    return await this.repository.save(category);
  }

  public async findAll() {
    return await this.repository.find();
  }

  public async findOne(id: number) {
    const category = await this.repository.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return category;
  }

  public async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.findOne(id);

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    category.updatedAt = new Date(Date.now());

    Object.assign(category, updateCategoryDto);

    return this.repository.save(category);
  }

  public async remove(id: number) {
    if (!(await this.findOne(id))) {
      throw new NotFoundException('Category not found');
    }

    return await this.repository.delete(id);
  }
}
