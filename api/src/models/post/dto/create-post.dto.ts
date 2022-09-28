import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { CategoryEntity } from '@/models/category/entities/category.entity';

export class CreatePostDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(40)
  @ApiProperty()
  description: string;

  @IsString()
  @ApiProperty()
  imageUrl: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  categoryId?: number;

  @IsOptional()
  @ApiProperty({ required: false })
  category?: CategoryEntity;
}
