import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from '@/users/dto/user.dto';
import { UserEntity } from '@/users/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  public async findAll(): Promise<UserEntity[]> {
    return await this.repository.find();
  }

  public async findOne(id: number): Promise<UserEntity> {
    return await this.repository.findOne({ where: { id } });
  }

  public async insert(user: UserDto): Promise<UserEntity> {
    const _user = this.repository.create(user);

    return await _user.save();
  }
}
