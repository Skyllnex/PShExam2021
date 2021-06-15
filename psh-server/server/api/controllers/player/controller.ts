import PlayerService from '../../services/player.service';
import { Request, Response } from 'express';
import { Player } from '../../models/player';
import { ResponseCode } from '../../enum/response-codes.enum';

export class Controller {
    findOne(req: Request, res: Response): void {
        const id = Number(req.params.id);

        PlayerService.findOne(id)
            .then(r => {
                if (!r) {
                    res.status(ResponseCode.NotFound).end();
                } else {
                    res.json(r);
                }
            })
            .catch(err => res.status(ResponseCode.InternalServerError).end());
    }

    save(req: Request, res: Response): void {
        const player = req.body;
        PlayerService.save(player)
            .then(r => res.json(r))
            .catch(err => console.error(err));
    }

    update(req: Request, res: Response): void {
        const id = Number(req.params.id);
        const player = req.body;

        PlayerService.update(id, player).then(r => {
            if (!r) return res.status(ResponseCode.NotFound).end();

            res.json(r);
        }).catch(err => res.status(ResponseCode.InternalServerError).end());
    }

    remove(req: Request, res: Response): void {
        const id = Number(req.params.id);

        PlayerService.remove(id).then(r => {
            if (!r) return res.status(ResponseCode.NotFound).end();

            res.json(r);
        }).catch(err => res.status(ResponseCode.InternalServerError).end());
    }

    getAll(req: Request, res: Response): void {
        PlayerService.getAll()
            .then(r => res.json(r))
            .catch(err => res.status(ResponseCode.InternalServerError).end());
    }
}

export default new Controller();