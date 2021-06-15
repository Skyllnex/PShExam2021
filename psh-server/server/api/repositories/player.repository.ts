import { Player } from '../models/player';
import { EntityRepository, AbstractRepository } from "typeorm";

@EntityRepository(Player)
export class PlayerRepository extends AbstractRepository<Player> {

    constructor() {
        super();
    }

    update = (id: number, player: Player): Promise<Player> => {
        return this.repository.findOne(id)
            .then(r => {
                if (!r) return;
                const updateEntity = {
                    ...r,
                    ...player,
                    id: r.id
                }
                return this.repository.save(updateEntity);
            })
    }

    save = (player: Player): Promise<Player> => {
        return this.repository.save(player);
    }

    remove = (id: number): Promise<Player> => {
        return this.repository.findOne(id)
            .then(r => {
                if (!r) return;

                return this.repository.remove(r);
            })
    }

    findOne = (id: number): Promise<Player> => {
        return this.repository.findOne(id);
    }

    findAll = (): Promise<Array<Player>> => {
        return this.repository.find();
    }

}