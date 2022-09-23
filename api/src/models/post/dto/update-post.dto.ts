import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiProperty({ required: false })
  @IsString()
  @MinLength(6)
  @IsOptional()
  title?: string;

  @ApiProperty({ required: false })
  @IsString()
  @MinLength(40)
  @IsOptional()
  description?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  imageUrl?: string;
}
