import { Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';

import { PrismaService } from '@/prisma/prisma.service';
import { UserDto } from '@/user/dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  public create(user: UserDto): Observable<UserDto> {
    return from(this.prismaService.user.create({ data: user }));
  }

  public findAll(): Observable<UserDto[]> {
    return from(this.prismaService.user.findMany());
  }

  public deleteOne(id: number): Observable<UserDto> {
    return from(this.prismaService.user.delete({ where: { id } }));
  }
}
