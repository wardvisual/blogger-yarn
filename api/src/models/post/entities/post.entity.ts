import slugify from 'slugify';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '@/models/user/entities/user.entity';
import { CategoryEntity } from '@/models/category/entities/category.entity';
import { TagEntity } from '@/models/tag/entities/tag.entity';
// import { TagEntity } from '@/models/tags/entities/tag.entity';

@Entity({ name: 'posts' })
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  slug: string;

  @Column()
  imageUrl: string;

  @Column()
  userId: number;

  @Column({ default: 1 })
  categoryId: number;

  @Column({ default: 1 })
  tagId: number;

  @ManyToOne(() => UserEntity, (tag: UserEntity) => tag.posts, {
    eager: true,
  })
  @JoinColumn({
    name: 'userId',
    referencedColumnName: 'id',
  })
  user: UserEntity;

  @ManyToOne(
    () => CategoryEntity,
    (category: CategoryEntity) => category.posts,
    { eager: true }
  )
  @JoinColumn({
    name: 'categoryId',
    referencedColumnName: 'id',
  })
  category?: CategoryEntity;

  @ManyToOne(() => TagEntity, (tags: TagEntity) => tags.posts, {
    eager: true,
  })
  @JoinColumn({
    name: 'tagId',
    referencedColumnName: 'id',
  })
  tag?: TagEntity;

  @BeforeInsert()
  slugifyPost() {
    this.slug = slugify(this.title.substring(0, 20), {
      lower: true,
      replacement: '_',
    });
  }

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
