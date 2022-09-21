import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  description?: string;
}
