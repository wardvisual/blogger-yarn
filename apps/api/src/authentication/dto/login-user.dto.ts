import { CreateUserDto } from '@/models/user/dto/create-user.dto';
import { PickType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto extends PickType(CreateUserDto, ['email', 'password']) {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
