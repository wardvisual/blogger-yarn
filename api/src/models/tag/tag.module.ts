import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { TagEntity } from './entities/tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TagController],
  providers: [TagService],
  imports: [TypeOrmModule.forFeature([TagEntity])],
})
export class TagModule {}
