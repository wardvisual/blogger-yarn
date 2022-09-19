import { DatabaseType } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@/config/database/mysql/config.module';
import { ConfigService } from '@/config/database/mysql/config.service';
import { UserEntity } from '@/models/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (mysqlConfigService: ConfigService) => ({
        type: mysqlConfigService.get('DB_TYPE') as DatabaseType,
        host: mysqlConfigService.get('DB_HOST'),
        port: +mysqlConfigService.get('DB_PORT'),
        username: mysqlConfigService.get('DB_USERNAME'),
        password: mysqlConfigService.get('DB_PASSWORD'),
        database: mysqlConfigService.get('DB_NAME'),
        entities: [UserEntity],
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class DatabaseProviderModule {}
