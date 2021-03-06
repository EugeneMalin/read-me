import { List } from "../list/list.entity";
import { Mark } from "../mark/mark.entity";
import { Person } from "../person/person.entity";
import { Tag } from "../tag/tag.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IBook } from "./book.interface";

@Entity()
export class Book implements IBook {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    link?: string;

    @Column()
    description?: string;

    @OneToOne(type => Person)
    author: Person;

    @OneToMany(type => Mark, mark => mark.book)
    marks: Mark[];

    @ManyToMany(type => List, list => list.books)
    lists: List[]

    @ManyToMany(type => Tag, tag => tag.books)
    @JoinTable()
    tags: Tag[]
}
