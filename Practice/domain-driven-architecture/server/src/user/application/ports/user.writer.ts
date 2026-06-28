import { User } from "../../domain/entities/user";

export interface UserWriter {
  save(user: User): Promise<void>;
  update(user: User): Promise<void>;
}