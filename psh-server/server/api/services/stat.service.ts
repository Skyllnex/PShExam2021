import { Stat } from '../models/stat';
import { StatRepository } from '../repositories/stat.repository';
import { getCustomRepository } from "typeorm";

export class StatService {

    save(stat: Stat): Promise<Stat> {
        return getCustomRepository(StatRepository).save(stat);
    }

    update(id: number, stat: any): Promise<Stat> {
        return getCustomRepository(StatRepository).update(id, stat);
    }

    remove(id: number): Promise<Stat> {
        return getCustomRepository(StatRepository).remove(id);
    }

    findOne(id: number): Promise<Stat> {
        return getCustomRepository(StatRepository).findOne(id);
    }

    getAll(): Promise<Array<Stat>> {
        return getCustomRepository(StatRepository).findAll();
    }

    getHighscores(): Promise<Array<Stat>> {
        return getCustomRepository(StatRepository).getHighscores();
    }

    getLastGenerated(): Promise<Stat>{
        return getCustomRepository(StatRepository).getLastGeneratedStat();
    }
}

export default new StatService();