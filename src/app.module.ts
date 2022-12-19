import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOption } from 'db/data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOption),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
