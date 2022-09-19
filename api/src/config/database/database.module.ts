import { Module } from '@nestjs/common';
import { databaseProviders } from '@/config/database/database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
