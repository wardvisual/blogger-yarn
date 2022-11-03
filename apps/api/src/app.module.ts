import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';

import { DatabaseProviderModule } from '@/providers/database/mysql/provider.module';
import { AllExceptionsFilter } from '@/common/exceptions/all-exceptions.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseProviderModule,
  ],
  controllers: [],
  providers: [
    DatabaseProviderModule,
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
  ],
})
export class AppModule {}
