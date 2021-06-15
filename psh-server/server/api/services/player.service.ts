import { Player } from '../models/player';
import { PlayerRepository } from '../repositories/player.repository';
import { getCustomRepository } from "typeorm";

export class PlayerService {

    save(player: Player): Promise<Player> {
        return getCustomRepository(PlayerRepository).save(player);
    }

    update(id: number, player: any): Promise<Player> {
        return getCustomRepository(PlayerRepository).update(id, player);
    }

    remove(id: number): Promise<Player> {
        return getCustomRepository(PlayerRepository).remove(id);
    }

    findOne(id: number): Promise<Player> {
        return getCustomRepository(PlayerRepository).findOne(id);
    }

    getAll(): Promise<Array<Player>> {
        return getCustomRepository(PlayerRepository).findAll();
    }
}

export default new PlayerService();