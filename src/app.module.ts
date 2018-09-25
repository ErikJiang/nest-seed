import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { DBOptions } from '../config';
import { AppController } from './app.controller';

import { UserModule } from './user/user.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(DBOptions),
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
