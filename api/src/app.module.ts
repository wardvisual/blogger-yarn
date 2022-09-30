import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';

import { DatabaseProviderModule } from '@/providers/database/mysql/provider.module';
import { AllExceptionsFilter } from '@/common/exceptions/all-exceptions.filter';
import { AuthModule } from './auth/auth.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseProviderModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    DatabaseProviderModule,
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
  ],
})
export class AppModule {}
