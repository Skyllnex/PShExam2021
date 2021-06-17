import StatService from '../../services/stat.service';
import { Request, Response } from 'express';
import { Stat } from '../../models/stat';
import { ResponseCode } from '../../enum/response-codes.enum';

export class Controller {
    findOne(req: Request, res: Response): void {
        const id = Number(req.params.id);

        StatService.findOne(id)
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
        const stat = req.body;
        StatService.save(stat)
            .then(r => res.json(r))
            .catch(err => console.error(err));
    }

    update(req: Request, res: Response): void {
        const id = Number(req.params.id);
        const stat = req.body;

        StatService.update(id, stat).then(r => {
            if (!r) return res.status(ResponseCode.NotFound).end();

            res.json(r);
        }).catch(err => res.status(ResponseCode.InternalServerError).end());
    }

    remove(req: Request, res: Response): void {
        const id = Number(req.params.id);

        StatService.remove(id).then(r => {
            if (!r) return res.status(ResponseCode.NotFound).end();

            res.json(r);
        }).catch(err => res.status(ResponseCode.InternalServerError).end());
    }

    getAll(req: Request, res: Response): void {
        StatService.getAll()
            .then(r => res.json(r))
            .catch(err => res.status(ResponseCode.InternalServerError).end());
    }

    getHighscores(req: Request, res: Response): void {
        StatService.getHighscores()
            .then(r => res.json(r))
            .catch(err => res.status(ResponseCode.InternalServerError).end());
    }

    getLastGenerated(req: Request, res: Response): void {
        StatService.getLastGenerated()
            .then(r => res.json(r))
            .catch(err => res.status(ResponseCode.InternalServerError).end());
    }
}

export default new Controller();