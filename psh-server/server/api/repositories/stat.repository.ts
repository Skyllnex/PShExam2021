import { Stat } from '../models/stat';
import { EntityRepository, AbstractRepository } from "typeorm";

@EntityRepository(Stat)
export class StatRepository extends AbstractRepository<Stat> {

    constructor() {
        super();
    }

    update = (id: number, stat: Stat): Promise<Stat> => {
        return this.repository.findOne(id)
            .then(r => {
                if (!r) return;
                const updateEntity = {
                    ...r,
                    ...stat,
                    id: r.id
                }
                return this.repository.save(updateEntity);
            })
    }

    save = (stat: Stat): Promise<Stat> => {
        return this.repository.save(stat);
    }

    remove = (id: number): Promise<Stat> => {
        return this.repository.findOne(id)
            .then(r => {
                if (!r) return;

                return this.repository.remove(r);
            })
    }

    findOne = (id: number): Promise<Stat> => {
        return this.repository.findOne(id);
    }

    findAll = (): Promise<Array<Stat>> => {
        return this.repository.find();
    }

    getHighscores = (): Promise<Array<Stat>> => {
        return this.repository.find(
        {
            relations: ["player", "game"],
            order: {
                score: 'DESC'
            },
            skip: 0,
            take: 10
        });
    }

    getLastGeneratedStat = (): Promise<Stat> => {
        return this.repository.findOne(
        {
            order: {
                created_at: 'DESC'
            }
        });
    } 
}