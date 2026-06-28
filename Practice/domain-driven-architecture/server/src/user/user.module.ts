import { Client } from 'pg';
import { Hono } from 'hono';
import { PostgresUserRepository } from './infrastructure/database/postgres-user-repository';
import { RegisterUserUseCase } from './application/use-cases/register-user';
import { LoginUserUseCase } from './application/use-cases/login-user';
import { UserController } from './presentation/controller/user.controller';
import { createUserRoutes } from './presentation/routes/user.routes';

export class UserModule {
  public readonly routes: Hono;
  public readonly registerUseCase: RegisterUserUseCase;
  public readonly loginUseCase: LoginUserUseCase;

  constructor(dbClient: Client) {
    const userRepository = new PostgresUserRepository(dbClient);

    this.registerUseCase = new RegisterUserUseCase(userRepository, userRepository);
    this.loginUseCase = new LoginUserUseCase(userRepository, userRepository);

    const userController = new UserController(this.registerUseCase, this.loginUseCase);

    this.routes = createUserRoutes(userController);
  }
}