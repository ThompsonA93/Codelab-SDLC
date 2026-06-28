import { Hono } from 'hono';
import { showRoutes } from "hono/dev";
import { serve } from '@hono/node-server';
import { Client } from 'pg';
import { config } from './config';
import { UserModule } from './user/user.module';

async function bootstrap() {
  const dbClient = new Client({ connectionString: config.db.url });

  try {
    await dbClient.connect();
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
  }

  const app = new Hono();

  const userModule = new UserModule(dbClient);
  app.route('/api/users', userModule.routes);
  showRoutes(app);

  serve({
    fetch: app.fetch,
    port: config.port,
  });

}

bootstrap();

/**
URL: http://localhost:3000/api/users/register
Header: Content-Type application/json
Body as raw: 
{
  "username": "thomas_auer",
  "email": "thomas.auer@bxample.com",
  "passwordPlain": "securePassword123"
} 

URL: http://localhost:3000/api/users/login
Header: Content-Type application/json
Body as raw:
{
  "email": "thomas.auer@example.com",
  "passwordPlain": "securePassword123"
}
*/