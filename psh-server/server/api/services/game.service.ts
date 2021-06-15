import { Game } from '../models/game';
import { GameRepository } from '../repositories/game.repository';
import { getCustomRepository } from "typeorm";

export class GameService {

    save(game: Game): Promise<Game> {
        return getCustomRepository(GameRepository).save(game);
    }

    update(id: number, game: any): Promise<Game> {
        return getCustomRepository(GameRepository).update(id, game);
    }

    remove(id: number): Promise<Game> {
        return getCustomRepository(GameRepository).remove(id);
    }

    findOne(id: number): Promise<Game> {
        return getCustomRepository(GameRepository).findOne(id);
    }

    getAll(): Promise<Array<Game>> {
        return getCustomRepository(GameRepository).findAll();
    }
}

export default new GameService();
