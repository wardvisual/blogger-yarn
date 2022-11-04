import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { PostEntity } from '../../post/entities/post.entity';

@Entity({ name: 'tags' })
export class TagsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(type => PostEntity)
  posts: PostEntity[];
}
