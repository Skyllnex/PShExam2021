import express from 'express';
import controller from './controller';

export default express.Router()
    .get('/highscores', controller.getHighscores)
    .get('/lastgenerated', controller.getLastGenerated)
    .get('/:id', controller.findOne)
    .post('/', controller.save)
    .put('/:id', controller.update)
    .delete('/:id', controller.remove)
    .get('/', controller.getAll);