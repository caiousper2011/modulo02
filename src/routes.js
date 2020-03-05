import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Caio Babrosa de Almeida',
    email: 'caiousper2011@hotmsil.com',
    password_hash: 'teste',
  });
  res.json(user);
});

export default routes;
