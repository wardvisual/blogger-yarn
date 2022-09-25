import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly repository: Repository<CategoryEntity>,
  ) {}

  public async create(createCategoryDto: CreateCategoryDto) {
    const category = new CategoryEntity();

    Object.assign(category, createCategoryDto);

    this.repository.insert(category);
    return await this.repository.save(category);
  }

  public async findAll() {
    return await this.repository.find();
  }

  public async findOne(id: number) {
    const categoryFromDb = await this.repository.findOne({ where: { id } });
    if (!categoryFromDb) {
      throw new NotFoundException('Category not found');
    }

    return categoryFromDb;
  }

  public async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    if (!(await this.findOne(id))) {
      throw new NotFoundException('Category not found');
    }

    return this.repository.update(id, updateCategoryDto);
  }

  public async remove(id: number) {
    if (!(await this.findOne(id))) {
      throw new NotFoundException('Category not found');
    }

    return await this.repository.delete(id);
  }
}
