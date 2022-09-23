import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateCategoryDto } from './create-category.dto';
import { IsString, MinLength } from 'class-validator';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  title?: string;

  @ApiProperty({ required: false })
  @IsString()
  @MinLength(10)
  description?: string;
}
