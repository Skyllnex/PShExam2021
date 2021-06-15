import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Stat } from "./stat";

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Stat, stat => stat.game)
    stats: Stat[];
}