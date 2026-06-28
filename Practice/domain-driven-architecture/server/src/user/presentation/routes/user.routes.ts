import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { UserController } from '../controller/user.controller';
import { registerUserSchema, loginUserSchema } from '../schemas/user.schema';

export function createUserRoutes(controller: UserController) {
  const routes = new Hono();

  routes.post(
    '/register', 
    zValidator('json', registerUserSchema), 
    controller.register
  );
  
  routes.post(
    '/login', 
    zValidator('json', loginUserSchema), 
    controller.login
  );

  return routes;
}