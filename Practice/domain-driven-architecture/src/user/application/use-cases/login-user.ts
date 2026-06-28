import { Email } from "../../domain/value-objects/email";
import type { UserReader } from "../ports/user.reader";
import type { UserWriter } from "../ports/user.writer";

export interface LoginUserDto {
  email: string;
  passwordPlain: string;
}

export class LoginUserUseCase {
  constructor(
    private readonly userReader: UserReader,
    private readonly userWriter: UserWriter
  ) {}

  public async execute(dto: LoginUserDto): Promise<{ token: string }> {
    const email = Email.create(dto.email);
    const user = await this.userReader.findByEmail(email);

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const primitives = user.toPrimitives();
    
    // Split stored "password:salt" format to check the value
    const [storedPassword] = primitives.passwordHash.split(':');
    
    const isPasswordValid = dto.passwordPlain === storedPassword; 
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    user.recordLogin(new Date());
    await this.userWriter.update(user);

    return { token: 'mock-jwt-token-based-on-id-' + primitives.id };
  }
}