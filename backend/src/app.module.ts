import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), BlogModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
