export class UserId {
  private constructor(private readonly value: string) {}

  public static create(id: string): UserId {
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) {
      throw new Error('Invalid UUID format');
    }
    return new UserId(id);
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: UserId): boolean {
    return this.value === other.getValue();
  }
}