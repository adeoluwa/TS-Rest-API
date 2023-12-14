import express from 'express';

import { deleteUser, getAllUsers } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers);

    /** a user deleting thier own account, they have to be logged in to be able to carry out the delete account ops */
    router.delete('/users/:id',isAuthenticated,isOwner ,deleteUser) 
};