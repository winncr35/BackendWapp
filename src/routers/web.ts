import express, { Express } from 'express';

const router = express.Router();

const webRoutes = (app: Express) => {
    router.get('/', (req, res) => {
        res.send('Hello World!')
    })
    router.get('/api', (req, res) => {
        res.send('Hello API!')
    })

    app.use('/', router);
}


export default webRoutes;
