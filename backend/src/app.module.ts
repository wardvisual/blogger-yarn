import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PrismaModule } from '@/prisma/prisma.module';
import { UserModule } from '@/user/user.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
