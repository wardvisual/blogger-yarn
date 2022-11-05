import { AllExceptionsFilter } from '@/common/exceptions/all-exceptions.filter';
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

@Module({
  providers: [{ provide: APP_FILTER, useClass: AllExceptionsFilter }],
})
export class CoreModule {}
