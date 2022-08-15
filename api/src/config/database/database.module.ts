import { Module } from '@nestjs/common';
import { DatabaseConfigService } from '@/config/database/service/database.service';
import { ConfigModule } from '@nestjs/config';
import databaseConfigAlias from '@/config/database/database.alias';

@Module({
  imports: [ConfigModule.forRoot({ load: [databaseConfigAlias] })],
  controllers: [],
  providers: [DatabaseConfigService],
})
export class DatabaseModule {}

// TODO: https://medium.com/the-crowdlinker-chronicle/creating-config-files-in-nestjs-dcd059ae15e4
