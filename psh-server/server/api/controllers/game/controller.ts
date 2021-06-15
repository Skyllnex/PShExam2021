import GameService from '../../services/game.service';
import { Request, Response } from 'express';
import { Game } from '../../models/game';
import { ResponseCode } from '../../enum/response-codes.enum';

export class Controller {
    findOne(req: Request, res: Response): void {
        const id = Number(req.params.id);

        GameService.findOne(id)
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
        const game = req.body;
        GameService.save(game)
            .then(r => res.json(r))
            .catch(err => console.error(err));
    }

    update(req: Request, res: Response): void {
        const id = Number(req.params.id);
        const game = req.body;

        GameService.update(id, game).then(r => {
            if (!r) return res.status(ResponseCode.NotFound).end();

            res.json(r);
        }).catch(err => res.status(ResponseCode.InternalServerError).end());
    }

    remove(req: Request, res: Response): void {
        const id = Number(req.params.id);

        GameService.remove(id).then(r => {
            if (!r) return res.status(ResponseCode.NotFound).end();

            res.json(r);
        }).catch(err => res.status(ResponseCode.InternalServerError).end());
    }

    getAll(req: Request, res: Response): void {
        GameService.getAll()
            .then(r => res.json(r))
            .catch(err => res.status(ResponseCode.InternalServerError).end());
    }
}

export default new Controller();