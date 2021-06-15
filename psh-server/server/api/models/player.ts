import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Stat } from "./stat";

@Entity()
export class Player {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nickname: string;
    @Column()
    profileImage : string;

    @OneToMany(() => Stat, stat => stat.player)
    stats: Stat[];

	constructor($nickname: string, $profileImage: string) {
		this.nickname = $nickname;
		this.profileImage = $profileImage;
	}
}