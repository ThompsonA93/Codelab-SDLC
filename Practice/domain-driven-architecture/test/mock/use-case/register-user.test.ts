import { describe, it, expect, vi } from 'vitest';
import type { Mocked } from 'vitest';
import { RegisterUserUseCase } from '../../../src/user/application/use-cases/register-user';
import type { UserReader } from '../../../src/user/application/ports/user.reader';
import type { UserWriter } from '../../../src/user/application/ports/user.writer';
import { User } from '../../../src/user/domain/entities/user';

describe('RegisterUserUseCase Unit Test', () => {
  it('should successfully register a new user when email is unique', async () => {
    const mockUserReader: Mocked<UserReader> = {
      findById: vi.fn(),
      findByEmail: vi.fn().mockResolvedValue(null),
    };

    const mockUserWriter: Mocked<UserWriter> = {
      save: vi.fn().mockResolvedValue(undefined),
      update: vi.fn(),
    };

    const useCase = new RegisterUserUseCase(mockUserReader, mockUserWriter);

    const input = {
      username: 'thomas_auer',
      email: 'thomas@example.com',
      passwordHash: 'some_hash'
    };

    await expect(useCase.execute(input)).resolves.not.toThrow();
    expect(mockUserWriter.save).toHaveBeenCalledTimes(1);
    expect(mockUserWriter.save).toHaveBeenCalledWith(expect.any(User));
  });

  it('should reject registration if email already exists', async () => {
    const mockExistingUser = {} as User;
    
    const mockUserReader: Mocked<UserReader> = {
      findById: vi.fn(),
      findByEmail: vi.fn().mockResolvedValue(mockExistingUser),
    };

    const mockUserWriter: Mocked<UserWriter> = {
      save: vi.fn(),
      update: vi.fn(),
    };

    const useCase = new RegisterUserUseCase(mockUserReader, mockUserWriter);

    const input = {
      username: 'thomas_auer',
      email: 'duplicate@example.com',
      passwordHash: 'some_hash'
    };

    await expect(useCase.execute(input)).rejects.toThrowError('User with this email already exists');
    expect(mockUserWriter.save).not.toHaveBeenCalled();
  });
});