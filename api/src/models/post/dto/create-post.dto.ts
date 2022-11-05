import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreatePostDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(40, { message: 'contnt must be 40 characters' })
  @ApiProperty()
  content: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  tagsId?: number;

  @IsString()
  @ApiProperty()
  imageUrl: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  categoryId?: number;
}
