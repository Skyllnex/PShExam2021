import { Application } from 'express';

import gameRouter from './api/controllers/game/router';
import playerRouter from './api/controllers/player/router';
import statRouter from './api/controllers/stat/router';

export default function routes(app: Application): void {
    app.use('/api/v1/games', gameRouter);
    app.use('/api/v1/players', playerRouter);
    app.use('/api/v1/stats', statRouter);
};