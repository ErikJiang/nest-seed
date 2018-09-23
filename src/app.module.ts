import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from '../config/typeorm';
import { AppController } from './app.controller';

// import { UserModule } from './user/user.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    // UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
