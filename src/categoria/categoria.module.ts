import { Module } from '@nestjs/common';
import { Categoria } from './entities/categoria.entiity'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaController } from '../categoria/controllers/categoria.controller';
import { CategoriaService } from './services/categoria.service'; 

@Module({
    imports: [TypeOrmModule.forFeature([Categoria])],
    controllers: [CategoriaController],
    providers: [CategoriaService],
    exports: [TypeOrmModule]
})
export class CategoriaModule {};