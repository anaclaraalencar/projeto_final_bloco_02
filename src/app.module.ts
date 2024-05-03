import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
import { AppController } from './app.controller';
import { Categoria } from './categoria/entities/categoria.entiity';

@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_farmacia',
    entities: [Categoria],
    synchronize: true,
    logging: true,
  
  }),
  CategoriaModule,

],
  controllers: [],
  providers: [],
})
export class AppModule {}
