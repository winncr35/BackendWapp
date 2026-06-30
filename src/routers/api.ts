
import { createUsersAPI, getAllUsers, deleteUserById, updateUserById } from '../controllers/api.controller';
import express, { Express } from 'express';

const router = express.Router();

const apiRoutes = (app: Express) => {

    router.post('/users', createUsersAPI)
    router.get('/users', getAllUsers)
    router.delete('/users/:id', deleteUserById)
    router.put('/users/:id', updateUserById)
    app.use('/api', router);
}


export default apiRoutes;