import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiProperty({ required: false })
  @IsString()
  @MinLength(6)
  title?: string;

  @ApiProperty({ required: false })
  @IsString()
  @MinLength(40)
  description?: string;

  @ApiProperty({ required: false })
  @IsString()
  imageUrl?: string;
}
