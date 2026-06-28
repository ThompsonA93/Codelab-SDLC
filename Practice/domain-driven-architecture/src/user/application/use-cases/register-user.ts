import { User } from "../../domain/entities/user";
import { UserId } from "../../domain/value-objects/user-id";
import { Email } from "../../domain/value-objects/email";
import type { UserWriter } from "../ports/user.writer";
import type { UserReader } from "../ports/user.reader";

export interface RegisterUserDto {
  username: string;
  email: string;
  passwordHash: string;
}


export class RegisterUserUseCase {
  constructor(
    private readonly userReader: UserReader,
    private readonly userWriter: UserWriter
  ) {}

  public async execute(dto: RegisterUserDto): Promise<void> {
    const email = Email.create(dto.email);

    const existingUser = await this.userReader.findByEmail(email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const user = User.create({
      id: UserId.create(crypto.randomUUID()),
      username: dto.username,
      email: email,
      biography: null,
      passwordHash: dto.passwordHash,
      lastLoginAt: null,
      createdAt: new Date(),
      settings: {
        privacySettings: { account_visibility: 'hidden', view_bio: 'public', view_location: 'radius' },
        themeCustomization: {},
      },
    });

    await this.userWriter.save(user);
  }
}