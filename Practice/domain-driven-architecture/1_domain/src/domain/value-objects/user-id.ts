export class UserId {
	readonly #value: string;

	private constructor(value: string) {
		this.#value = value;
		Object.freeze(this);
	}

	public static create(value: string): UserId {
		const uuidRegex =
			/^[0-9a-f]{8}-[0-9a-f]{4}-[0-4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
		if (!value || !uuidRegex.test(value)) {
			throw new Error("validation_failed: Invalid identity identifier format");
		}
		return new UserId(value);
	}

	public static random(): UserId {
		return new UserId(crypto.randomUUID());
	}

	public getValue(): string {
		return this.#value;
	}

	public equals(other: UserId): boolean {
		return this.#value === other.getValue();
	}
}
