import { Game } from '../models/game';
import { EntityRepository, AbstractRepository } from "typeorm";

@EntityRepository(Game)
export class GameRepository extends AbstractRepository<Game> {

    constructor() {
        super();
    }

    update = (id: number, game: Game): Promise<Game> => {
        return this.repository.findOne(id)
            .then(r => {
                if (!r) return;
                const updateEntity = {
                    ...r,
                    ...game,
                    id: r.id
                }
                return this.repository.save(updateEntity);
            })
    }

    save = (game: Game): Promise<Game> => {
        return this.repository.save(game);
    }

    remove = (id: number): Promise<Game> => {
        return this.repository.findOne(id)
            .then(r => {
                if (!r) return;

                return this.repository.remove(r);
            })
    }

    findOne = (id: number): Promise<Game> => {
        return this.repository.findOne(id);
    }

    findAll = (): Promise<Array<Game>> => {
        return this.repository.find();
    }
}