export class Email {
	#value: string;

	private constructor(value: string) {
		this.#value = value.toLowerCase().trim();
	}

	public static create(value: string): Email {
		const trimmedEmail = value?.trim();
		if (
			!trimmedEmail ||
			trimmedEmail.length > 254 ||
			!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
		) {
			throw new Error("validation_failed: Invalid email format");
		}
		return new Email(trimmedEmail);
	}

	public getValue(): string {
		return this.#value;
	}

	public equals(other: Email): boolean {
		return this.#value === other.getValue();
	}
}
