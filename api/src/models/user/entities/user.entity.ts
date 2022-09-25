import { PostEntity } from '@/models/post/entities/post.entity';
import * as bcrypt from 'bcryptjs';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column()
  avatar: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @OneToMany((type) => PostEntity, (post: PostEntity) => post.user)
  posts: PostEntity[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);

    // try {
    //   const rounds = bcrypt.getRounds(this.password);
    //   if (rounds === 0) {
    //     this.password = await bcrypt.hash(this.password, 10);
    //   }
    // } catch (error) {
    //   this.password = await bcrypt.hash(this.password, 10);
    // }
  }
}
