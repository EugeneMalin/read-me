import { Book } from "../book/book.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ITag } from "./tag.interface";

@Entity()
export class Tag implements ITag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToMany(type => Book, book => book.tags)
    books: Book[]
}
