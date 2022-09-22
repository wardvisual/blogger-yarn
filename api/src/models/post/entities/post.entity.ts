import { UserEntity } from '@/models/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from '../../category/entities/category.entity';

@Entity({ name: 'posts' })
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  slug: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column()
  imageUrl: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.posts, {
    eager: true,
  })
  user: UserEntity;

  @ManyToOne(
    () => CategoryEntity,
    (category: CategoryEntity) => category.posts,
    { eager: true },
  )
  category: CategoryEntity;
}
