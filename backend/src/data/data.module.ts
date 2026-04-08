import { Module } from '@nestjs/common';
import { databaseProviders } from './data.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})

export class DatabaseModule {}
