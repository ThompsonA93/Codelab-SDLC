export class PasswordHash {
	readonly #value: string;

	private constructor(value: string) {
		this.#value = value;
		Object.freeze(this);
	}

	/**
	 * Creates a Value Object from an already existing, securely generated cryptographic hash.
	 * Used when reading from the database or after a successful hashing operation.
	 */
	public static fromHashString(hash: string): PasswordHash {
		if (!hash || hash.length < 30) {
			throw new Error(
				"validation_failed: Password hash too short or invalid format",
			);
		}
		return new PasswordHash(hash);
	}

	/**
	 * Converts a raw plaintext string into a secure cryptographic hash and wraps it.
	 * Uses Bun's native, ultra-fast password hashing API (defaults to Argon2id or bcrypt natively).
	 */
	public static async hash(plainText: string): Promise<PasswordHash> {
		if (!plainText || plainText.length < 8) {
			throw new Error(
				"validation_failed: Plaintext password must be at least 8 characters long",
			);
		}

		const generatedHash = await Bun.password.hash(plainText);
		return new PasswordHash(generatedHash);
	}

	public getValue(): string {
		return this.#value;
	}

	public async compare(plainText: string): Promise<boolean> {
		return await Bun.password.verify(plainText, this.#value);
	}

	public equals(other: PasswordHash): boolean {
		return this.#value === other.getValue();
	}

	public static fromPersistence(hash: string): PasswordHash {
		return PasswordHash.fromHashString(hash);
	}
}
