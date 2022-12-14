import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiProperty({ required: false })
  title: string;

  @ApiProperty({ required: false })
  content: string;

  @ApiProperty({ required: false })
  imageUrl: string;

  @ApiProperty({ required: false })
  categoryId: number;
}
