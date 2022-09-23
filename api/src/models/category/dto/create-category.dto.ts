import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  title: string;

  @ApiProperty({ required: false })
  @IsString()
  @MinLength(10)
  description?: string;
}
