import { Context } from 'hono';
import { RegisterUserUseCase } from '../../application/use-cases/register-user';
import { LoginUserUseCase } from '../../application/use-cases/login-user';
import type { RegisterUserRequest, LoginUserRequest } from '../schemas/user.schema';

export class UserController {
  constructor(
    private readonly registerUseCase: RegisterUserUseCase,
    private readonly loginUseCase: LoginUserUseCase
  ) {}

  public register = async (c: Context) => {
    try {
      const validated = await c.req.json<RegisterUserRequest>();
      
      const salt = crypto.randomUUID();
      const mockPasswordHash = validated.passwordPlain + ':' + salt; 

      await this.registerUseCase.execute({
        username: validated.username,
        email: validated.email,
        passwordHash: mockPasswordHash,
      });

      return c.json({ success: true }, 201);
    } catch (error: any) {
      return c.json({ error: error.message }, 400);
    }
  };

  public login = async (c: Context) => {
    try {
      const validated = await c.req.json<LoginUserRequest>();
      
      const result = await this.loginUseCase.execute({
        email: validated.email,
        passwordPlain: validated.passwordPlain,
      });

      return c.json(result, 200);
    } catch (error: any) {
      return c.json({ error: error.message }, 401);
    }
  };
}