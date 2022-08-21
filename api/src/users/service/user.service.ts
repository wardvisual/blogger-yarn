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
    try {
      return await this.repository.findOneOrFail({ where: { id } });
    } catch (err) {
      return err;
    }
  }

  public async insert(user: UserDto): Promise<UserEntity> {
    const userFromDb = this.repository.findOneOrFail({
      where: { username: user.username },
    });
    // const newUser = this.repository.create(user);

    return userFromDb;
    // return await newUser.save();
  }
}
