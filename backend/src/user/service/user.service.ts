import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { UserDto } from '@/user/dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  public async createUser(user: UserDto) {
    return await this.prismaService.user.create({ data: user });
  }

  public async getUsers() {
    return await this.prismaService.user.findMany();
  }

  public deleteUser(id: number) {
    return this.prismaService.user.delete({ where: { id } });
  }
}
