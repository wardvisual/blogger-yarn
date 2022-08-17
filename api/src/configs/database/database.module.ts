import { Module } from '@nestjs/common';
import { databaseProviders } from '@/configs/database/database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
