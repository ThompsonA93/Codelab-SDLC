import { UserId } from '../value-objects/user-id';
import { Email } from '../value-objects/email';

export interface UserProps {
  id: UserId;
  username: string;
  email: Email;
  biography: string | null;
  passwordHash: string;
  lastLoginAt: Date | null;
  createdAt: Date;
  settings: {
    privacySettings: Record<string, any>;
    themeCustomization: Record<string, any>;
  };
}

export class User {
  private constructor(private props: UserProps) {}

  public static create(props: UserProps): User {
    if (props.username.length < 3) {
      throw new Error('Username must be at least 3 characters long');
    }
    return new User(props);
  }

  public recordLogin(timestamp: Date): void {
    this.props.lastLoginAt = timestamp;
  }

  public updatePrivacySettings(settings: Record<string, any>): void {
    this.props.settings.privacySettings = {
      ...this.props.settings.privacySettings,
      ...settings,
    };
  }

  public toPrimitives() {
    return {
      id: this.props.id.getValue(),
      username: this.props.username,
      email: this.props.email.getValue(),
      biography: this.props.biography,
      passwordHash: this.props.passwordHash,
      lastLoginAt: this.props.lastLoginAt,
      createdAt: this.props.createdAt,
      settings: {
        privacySettings: this.props.settings.privacySettings,
        themeCustomization: this.props.settings.themeCustomization,
      },
    };
  }
}