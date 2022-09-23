import { PostEntity } from '@/models/post/entities/post.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { IsNotEmpty, MinLength, IsEmail, IsString } from 'class-validator';
@Entity({ name: 'users' })
export class UserEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @Column()
  firstname: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @Column()
  lastname: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  @Column()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Column()
  password: string;

  @ApiProperty()
  @IsString()
  @Column()
  avatar: string;

  @ApiProperty()
  @OneToMany((type) => PostEntity, (post: PostEntity) => post.user)
  posts: PostEntity[];
}
