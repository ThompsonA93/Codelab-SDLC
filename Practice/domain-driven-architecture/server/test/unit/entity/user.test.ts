import { describe, it, expect } from 'vitest';
import { User } from '../../../src/user/domain/entities/user';
import { UserId } from '../../../src/user/domain/value-objects/user-id';
import { Email } from '../../../src/user/domain/value-objects/email';

describe('User Aggregate Invariants', () => {
  const validProps = {
    id: UserId.create('00000000-0000-0000-0000-000000000000'),
    username: 'valid_user',
    email: Email.create('test@example.com'),
    biography: null,
    passwordHash: 'hashed_password',
    lastLoginAt: null,
    createdAt: new Date(),
    settings: { privacySettings: {}, themeCustomization: {} }
  };

  it('should successfully create a valid user instance', () => {
    const user = User.create(validProps);
    expect(user).toBeInstanceOf(User);
    expect(user.toPrimitives().username).toBe('valid_user');
  });

  it('should throw an error if the username is less than 3 characters', () => {
    expect(() => {
      User.create({
        ...validProps,
        username: 'ab'
      });
    }).toThrowError('Username must be at least 3 characters long');
  });
});