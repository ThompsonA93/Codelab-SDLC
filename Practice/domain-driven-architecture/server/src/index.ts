import { Hono } from 'hono';
import { cors } from 'hono/cors';
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

  app.use('/api/*', cors({
    origin: 'http://localhost:5173',
    allowMethods: ['POST', 'GET', 'OPTIONS'],
  }));

  const userModule = new UserModule(dbClient);

  const routes = app.route('/api/users', userModule.routes);

  console.log(`Composition Root successfully wired. Server running on port ${config.port}`);
  
  serve({
    fetch: app.fetch,
    port: config.port,
  });

  return routes;
}

export type AppType = Awaited<ReturnType<typeof bootstrap>>;

bootstrap();