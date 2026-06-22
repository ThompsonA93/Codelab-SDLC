import { Email } from "../value-objects/email";
import { PasswordHash } from "../value-objects/password-hash";
import { UserId } from "../value-objects/user-id";

export type UserProps = {
	id: UserId;
    username: string;
    email: Email;
    biography: string;
    passwordHash: PasswordHash;
	lastLoginAt: Date | null;
	createdAt: Date;
}

export class User {
	private props: UserProps;

	constructor(props: UserProps) {
		this.props = { ...props };
	}

	public static createNew(
		id: UserId,
        username: string,
		email: Email,
		passwordHash: PasswordHash,
	): User {
		const now = new Date();
		return new User({
			id: id,
            username: username,
			email: email,
            biography: "",
			passwordHash: passwordHash,
			lastLoginAt: now,
			createdAt: now,
		});
	}

	public getId(): UserId {
		return this.props.id;
	}
	public getEmail(): Email {
		return this.props.email;
	}
	public getPasswordHash(): PasswordHash {
		return this.props.passwordHash;
	}

	public changePassword(newPasswordHash: PasswordHash): void {
		this.props.passwordHash = newPasswordHash;
	}

}
