import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseProviderModule } from '@/providers/database/mysql/provider.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseProviderModule,
  ],
  controllers: [],
  providers: [DatabaseProviderModule],
})
export class AppModule {}
