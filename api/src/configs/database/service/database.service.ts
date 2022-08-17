import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfigService {
  constructor(private readonly configService: ConfigService) {}

  public get name(): string {
    return this.configService.get<string>('db.name');
  }
  public get username(): string {
    return this.configService.get<string>('db.username');
  }
  public get password(): string {
    return this.configService.get<string>('db.password');
  }
}
