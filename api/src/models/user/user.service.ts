import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class UserService {
  logger = new Logger();
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    let user = null;
    this.logger.log({ createUserDto });

    user = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    this.logger.log({ user });

    if (!user) {
      user = new UserEntity();

      Object.assign(user, createUserDto);

      this.userRepository.create(user);

      return await this.userRepository.save(user);
    }

    throw new BadRequestException(`User with this email is already exist`);
  }

  public async findOne(where: FindOneOptions<UserEntity>): Promise<UserEntity> {
    this.logger.log({ where });
    const user = await this.userRepository.findOne(where);

    this.logger.log({ user });

    if (!user)
      throw new NotFoundException(
        `There isn't any user with identifier: ${where}`,
      );

    return user;
  }

  public async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user)
      throw new NotFoundException(`There isn't any user with an ID of: ${id}`);

    user.updatedAt = new Date(Date.now());

    Object.assign(user, updateUserDto);

    return await this.userRepository.save(user);
  }
}
