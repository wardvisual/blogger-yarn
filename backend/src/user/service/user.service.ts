import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/service/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUser() {
    await this.prismaService.user.create({});
  }
}
