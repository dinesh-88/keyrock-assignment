import { Router } from 'express';
import wallet from './wallet';

export default ({config, db}) => {
    let api = Router();
    api.use('/', wallet);
    return api;
}
