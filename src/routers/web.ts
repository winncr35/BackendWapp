
import express, { Express } from 'express';

const router = express.Router();

const webRoutes = (app: Express) => {
    router.get('/', (req, res) => {
        res.send('Hello Worl 333333')
    })

    app.use('/', router);
}


export default webRoutes;
