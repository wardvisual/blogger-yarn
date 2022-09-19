import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from '@/models/users/dto/user.dto';
import { UserEntity } from '@/models/users/entities/user.entity';

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
    try {
      return await this.repository.findOneOrFail({ where: { id } });
    } catch (err) {
      return err;
    }
  }

  public async insert(user: UserDto): Promise<UserEntity> {
    const userFromDb = await this.repository.findOne({
      where: { username: user.username },
    });

    if (!userFromDb) {
      await userFromDb.save();
      return userFromDb;
    }
  }

  public async deleteOne(id: string): Promise<void> {
    try {
      await this.repository.delete(id);
    } catch (err) {
      return err;
    }
  }
}
