import { User } from "../../domain/entities/user";
import { UserId } from "../../domain/value-objects/user-id";
import { Email } from "../../domain/value-objects/email";

export interface UserReader {
  findById(id: UserId): Promise<User | null>;
  findByEmail(email: Email): Promise<User | null>;
}