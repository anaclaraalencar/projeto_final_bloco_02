import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entiity"; 
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({ type: 'float', precision: 6, scale: 2, nullable: false })
    preco: number

    @IsNotEmpty()
    @Column({ type: 'date', nullable: false })
    validade: Date;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    foto: string

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria

}