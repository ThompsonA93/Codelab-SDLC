import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest';
import { Client } from 'pg';
import { Hono } from 'hono';
import { config } from '../../src/config';
import { UserModule } from '../../src/user/user.module';

describe('User Authentication Acceptance Flow', () => {
  let dbClient: Client;
  let app: Hono;

  beforeAll(async () => {
    dbClient = new Client({
      connectionString: config.db.url,
    });
    await dbClient.connect();

    app = new Hono();
    const userModule = new UserModule(dbClient);
    app.route('/api/users', userModule.routes);
  });

  beforeEach(async () => {
    await dbClient.query('TRUNCATE TABLE UserSettings, Users CASCADE;');
  });

  afterAll(async () => {
    await dbClient.end();
  });

  it('should successfully register a user and then allow them to login', async () => {
    const registrationPayload = {
      username: 'thomas_auer_e2e',
      email: 'thomas.e2e@example.com',
      passwordPlain: 'superSecurePassword123'
    };

    const registerResponse = await app.request('/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registrationPayload),
    });

    expect(registerResponse.status).toBe(201);
    const registerBody = await registerResponse.json();
    expect(registerBody).toEqual({ success: true });

    const loginPayload = {
      email: 'thomas.e2e@example.com',
      passwordPlain: 'superSecurePassword123'
    };

    const loginResponse = await app.request('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginPayload),
    });

    expect(loginResponse.status).toBe(200);
    const loginBody = await loginResponse.json();
    expect(loginBody).toHaveProperty('token');
    expect(loginBody.token).toContain('mock-jwt-token-based-on-id-');
  });

  it('should fail registration if the input breaks Zod schemas', async () => {
    const invalidPayload = {
      username: 'th',
      email: 'not-an-email',
      passwordPlain: 'short'
    };

    const response = await app.request('/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(invalidPayload),
    });

    expect(response.status).toBe(400);
  });
});