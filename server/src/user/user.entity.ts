import md5 from "md5";
import { Mark } from "src/mark/mark.entity";
import { Person } from "src/person/person.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "./user.interface";

@Entity()
export class User implements IUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    email: string;

    @Column({nullable: false, length: 16})
    login: string;

    @Column({nullable: false, length: 16})
    password: string;

    @OneToOne(type => Person)
    person: Person;

    @OneToMany(type => Mark, mark => mark.user)
    marks: Mark[];

    static hashPassword(password: string): string {
        return md5(password);
    }
}
