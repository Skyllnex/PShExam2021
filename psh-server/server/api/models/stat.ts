import {Entity, PrimaryGeneratedColumn,Column ,ManyToOne, CreateDateColumn} from "typeorm";
import { Player } from "./player";
import { Game } from "./game";

@Entity()
export class Stat {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    score: number;
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @ManyToOne(() => Player, player => player.stats)
    player: Player;
    @ManyToOne(() => Game, game => game.stats)
    game: Game;

    constructor($score: number) {
      this.score = $score;
    }
}