import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Categoria } from "../entities/categoria.entiity"; 
import { CategoriaService } from "../services/categoria.service"; 



@Controller("/categorias")
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
    return this.categoriaService.findById(id);
  }

  @Get('/tipo/:tipo')
  @HttpCode(HttpStatus.OK)
  findBytipo(@Param('tipo') tipo: string): Promise<Categoria[]> {
    return this.categoriaService.findByTipo(tipo);
  }

  @Post('/cadastrar')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() tipo: Categoria): Promise<Categoria> {
    return this.categoriaService.post(tipo);
  }

  @Put('/atualizar')
  @HttpCode(HttpStatus.OK)
  update(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.put(categoria);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number){
    return this.categoriaService.delete(id);
  }

}