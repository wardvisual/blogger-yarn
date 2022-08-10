import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/service/prisma.service';

@Injectable()
export class BlogService {
  constructor(private readonly prismaService: PrismaService) {}
}
