import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async create(createUserDto: CreateUserDto) {
    const user = new UserEntity();

    Object.assign(user, createUserDto);

    this.userRepository.create(user);

    return await this.userRepository.save(user);
  }

  public async findAll() {
    return await this.userRepository.find();
  }

  public async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user)
      throw new NotFoundException(`User with an ID of ${id} was not found.`);

    return user;
  }

  public async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);

    if (!user)
      throw new NotFoundException(`User with an ID of ${id} was not found.`);

    user.updatedAt = new Date(Date.now());

    Object.assign(user, updateUserDto);

    return await this.userRepository.save(user);
  }

  public async remove(id: number) {
    if (!(await this.findOne(id))) {
      throw new NotFoundException(`User with an ID of ${id} was not found.`);
    }

    return await this.userRepository.delete(id);
  }
}
