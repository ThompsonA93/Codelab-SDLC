import { describe, it, expect, beforeEach, beforeAll, afterAll } from 'vitest';
import { Client } from 'pg';
import { config } from '../../../src/config';
import { PostgresUserRepository } from '../../../src/user/infrastructure/database/postgres-user-repository';
import { User } from '../../../src/user/domain/entities/user';
import { UserId } from '../../../src/user/domain/value-objects/user-id';
import { Email } from '../../../src/user/domain/value-objects/email';

describe('PostgresUserRepository Integration Test', () => {
  let dbClient: Client;
  let repository: PostgresUserRepository;

  beforeAll(async () => {
    dbClient = new Client({
      connectionString: config.db.url,
    });
    await dbClient.connect();
    repository = new PostgresUserRepository(dbClient);
  });

  beforeEach(async () => {
    await dbClient.query('TRUNCATE TABLE UserSettings, Users CASCADE;');
  });

  afterAll(async () => {
    await dbClient.end();
  });

  it('should save a user aggregate across both tables and find it back', async () => {
    const userIdStr = crypto.randomUUID();
    const emailStr = `test-${crypto.randomUUID()}@example.com`;

    const user = User.create({
      id: UserId.create(userIdStr),
      username: 'test_integration_user',
      email: Email.create(emailStr),
      biography: 'Hello World',
      passwordHash: 'hashed_str',
      lastLoginAt: null,
      createdAt: new Date(),
      settings: {
        privacySettings: { account_visibility: 'public' },
        themeCustomization: { dark_mode: true },
      },
    });

    await repository.save(user);

    const foundUser = await repository.findById(user.props.id);

    expect(foundUser).not.toBeNull();
    const primitives = foundUser!.toPrimitives();
    
    expect(primitives.id).toBe(userIdStr);
    expect(primitives.username).toBe('test_integration_user');
    expect(primitives.email).toBe(emailStr);
    expect(primitives.settings.privacySettings).toEqual({ account_visibility: 'public' });
  });

  it('should return null when searching for a non-existent user id', async () => {
    const randomId = UserId.create(crypto.randomUUID());
    const result = await repository.findById(randomId);
    expect(result).toBeNull();
  });
});