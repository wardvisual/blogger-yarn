import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { PostEntity } from '@/models/post/entities/post.entity';

@Entity({ name: 'categories' })
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  title: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  description: string;

  @IsNotEmpty()
  @IsDate()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @IsNotEmpty()
  @IsDate()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @OneToMany((type) => PostEntity, (post: PostEntity) => post.category)
  posts: PostEntity[];
}
