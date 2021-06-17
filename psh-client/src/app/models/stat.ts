import { Game } from './game';
import { Player } from './player';

export class Stat {
    id: number;
    score: number;
    created_at: Date;

    player: Player;
    game: Game;
}