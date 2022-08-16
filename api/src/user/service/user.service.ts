import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  public async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  public async findOne(id: number): Promise<User> {
    return await this.repository.findOne({ where: { id } });
  }
}
