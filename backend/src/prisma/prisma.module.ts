import { Module } from '@nestjs/common';
import { PrismaService } from './service/prisma.service';
import { PrismaController } from './controller/prisma.controller';

@Module({
  providers: [PrismaService],
  controllers: [PrismaController],
})
export class PrismaModule {}
