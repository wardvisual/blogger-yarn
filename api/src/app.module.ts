import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseProviderModule } from '@/providers/database/mysql/provider.module';
import { CoreModule } from '@/core/core.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseProviderModule,
  ],
  controllers: [],
  providers: [CoreModule, DatabaseProviderModule],
})
export class AppModule {}
