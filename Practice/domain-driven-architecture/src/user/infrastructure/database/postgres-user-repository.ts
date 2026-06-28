import { Client } from 'pg';
import { User } from "../../domain/entities/user";
import { UserId } from "../../domain/value-objects/user-id";
import { Email } from "../../domain/value-objects/email";
import type { UserReader } from '../../application/ports/user.reader';
import type { UserWriter } from "../../application/ports/user.writer";

export class PostgresUserRepository implements UserReader, UserWriter {
  constructor(private readonly db: Client) {}

  public async findById(id: UserId): Promise<User | null> {
    const query = `
      SELECT u.*, s.privacy_settings, s.theme_customization
      FROM Users u
      LEFT JOIN UserSettings s ON u.user_id = s.user_id
      WHERE u.user_id = $1
    `;
    const result = await this.db.query(query, [id.getValue()]);

    if (result.rows.length === 0) {
      return null;
    }

    return this.mapToDomain(result.rows[0]);
  }

  public async findByEmail(email: Email): Promise<User | null> {
    const query = `
      SELECT u.*, s.privacy_settings, s.theme_customization
      FROM Users u
      LEFT JOIN UserSettings s ON u.user_id = s.user_id
      WHERE u.email = $1
    `;
    const result = await this.db.query(query, [email.getValue()]);

    if (result.rows.length === 0) {
      return null;
    }

    return this.mapToDomain(result.rows[0]);
  }

  public async save(user: User): Promise<void> {
    const primitives = user.toPrimitives();

    await this.db.query('BEGIN');
    try {
      const userQuery = `
        INSERT INTO Users (user_id, username, email, biography, password_hash, last_login_at, created_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
      `;
      await this.db.query(userQuery, [
        primitives.id,
        primitives.username,
        primitives.email,
        primitives.biography,
        primitives.passwordHash,
        primitives.lastLoginAt,
        primitives.createdAt
      ]);

      const settingsQuery = `
        INSERT INTO UserSettings (settings_id, user_id, privacy_settings, theme_customization)
        VALUES ($1, $2, $3, $4)
      `;
      await this.db.query(settingsQuery, [
        crypto.randomUUID(),
        primitives.id,
        JSON.stringify(primitives.settings.privacySettings),
        JSON.stringify(primitives.settings.themeCustomization)
      ]);

      await this.db.query('COMMIT');
    } catch (error) {
      await this.db.query('ROLLBACK');
      throw error;
    }
  }

  public async update(user: User): Promise<void> {
    const primitives = user.toPrimitives();

    await this.db.query('BEGIN');
    try {
      const userQuery = `
        UPDATE Users 
        SET username = $2, email = $3, biography = $4, password_hash = $5, last_login_at = $6
        WHERE user_id = $1
      `;
      await this.db.query(userQuery, [
        primitives.id,
        primitives.username,
        primitives.email,
        primitives.biography,
        primitives.passwordHash,
        primitives.lastLoginAt
      ]);

      const settingsQuery = `
        UPDATE UserSettings 
        SET privacy_settings = $2, theme_customization = $3
        WHERE user_id = $1
      `;
      await this.db.query(settingsQuery, [
        primitives.id,
        JSON.stringify(primitives.settings.privacySettings),
        JSON.stringify(primitives.settings.themeCustomization)
      ]);

      await this.db.query('COMMIT');
    } catch (error) {
      await this.db.query('ROLLBACK');
      throw error;
    }
  }

  private mapToDomain(row: any): User {
    return User.create({
      id: UserId.create(row.user_id),
      username: row.username,
      email: Email.create(row.email),
      biography: row.biography,
      passwordHash: row.password_hash,
      lastLoginAt: row.last_login_at ? new Date(row.last_login_at) : null,
      createdAt: new Date(row.created_at),
      settings: {
        privacySettings: typeof row.privacy_settings === 'string' ? JSON.parse(row.privacy_settings) : row.privacy_settings,
        themeCustomization: typeof row.theme_customization === 'string' ? JSON.parse(row.theme_customization) : row.theme_customization,
      }
    });
  }
}