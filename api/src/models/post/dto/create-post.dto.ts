import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

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
}
