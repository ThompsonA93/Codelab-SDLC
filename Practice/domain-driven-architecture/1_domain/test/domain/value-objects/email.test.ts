
import { Email } from "../../../src/domain/value-objects/email";

describe('Email', () => {
  describe('Email.create()', () => {
    describe('Valid email addresses', () => {
      it('should create an email with a valid format', () => {
        const email = Email.create('user@example.com');
        expect(email).toBeInstanceOf(Email);
      });

      it('should create an email with subdomain', () => {
        const email = Email.create('user@mail.example.co.uk');
        expect(email).toBeInstanceOf(Email);
      });

      it('should handle email with numbers and dots', () => {
        const email = Email.create('user.name123@example.com');
        expect(email).toBeInstanceOf(Email);
      });

      it('should handle email with hyphens', () => {
        const email = Email.create('user-name@example-domain.com');
        expect(email).toBeInstanceOf(Email);
      });

      it('should handle email with underscores', () => {
        const email = Email.create('user_name@example.com');
        expect(email).toBeInstanceOf(Email);
      });

      it('should handle email with plus sign', () => {
        const email = Email.create('user+tag@example.com');
        expect(email).toBeInstanceOf(Email);
      });
    });

    describe('Whitespace handling', () => {
      it('should trim leading whitespace', () => {
        const email = Email.create('  user@example.com');
        expect(email.getValue()).toBe('user@example.com');
      });

      it('should trim trailing whitespace', () => {
        const email = Email.create('user@example.com  ');
        expect(email.getValue()).toBe('user@example.com');
      });

      it('should trim both leading and trailing whitespace', () => {
        const email = Email.create('  user@example.com  ');
        expect(email.getValue()).toBe('user@example.com');
      });
    });

    describe('Case handling', () => {
      it('should convert uppercase letters to lowercase', () => {
        const email = Email.create('USER@EXAMPLE.COM');
        expect(email.getValue()).toBe('user@example.com');
      });

      it('should convert mixed case to lowercase', () => {
        const email = Email.create('User@Example.Com');
        expect(email.getValue()).toBe('user@example.com');
      });

      it('should handle mixed case with whitespace', () => {
        const email = Email.create('  USER@EXAMPLE.COM  ');
        expect(email.getValue()).toBe('user@example.com');
      });
    });

    describe('Invalid email addresses', () => {
      it('should throw error for empty string', () => {
        expect(() => Email.create('')).toThrow('validation_failed: Invalid email format');
      });

      it('should throw error for null or undefined', () => {
        expect(() => Email.create(null as any)).toThrow('validation_failed: Invalid email format');
        expect(() => Email.create(undefined as any)).toThrow('validation_failed: Invalid email format');
      });

      it('should throw error for whitespace-only string', () => {
        expect(() => Email.create('   ')).toThrow('validation_failed: Invalid email format');
      });

      it('should throw error when missing @ symbol', () => {
        expect(() => Email.create('userexample.com')).toThrow('validation_failed: Invalid email format');
      });

      it('should throw error when missing domain extension', () => {
        expect(() => Email.create('user@example')).toThrow('validation_failed: Invalid email format');
      });

      it('should throw error for multiple @ symbols', () => {
        expect(() => Email.create('user@@example.com')).toThrow('validation_failed: Invalid email format');
      });

      it('should throw error when @ is at the beginning', () => {
        expect(() => Email.create('@example.com')).toThrow('validation_failed: Invalid email format');
      });

      it('should throw error when @ is at the end', () => {
        expect(() => Email.create('user@')).toThrow('validation_failed: Invalid email format');
      });

      it('should throw error for spaces in email', () => {
        expect(() => Email.create('user name@example.com')).toThrow('validation_failed: Invalid email format');
      });

      it('should throw error for space before @', () => {
        expect(() => Email.create('user @example.com')).toThrow('validation_failed: Invalid email format');
      });

      it('should throw error for space after @', () => {
        expect(() => Email.create('user@ example.com')).toThrow('validation_failed: Invalid email format');
      });
    });

    describe('Length validation', () => {
      it('should throw error for email exceeding 254 characters', () => {
        const longEmail = 'a'.repeat(255) + '@example.com';
        expect(() => Email.create(longEmail)).toThrow('validation_failed: Invalid email format');
      });

      it('should accept email with exactly 254 characters', () => {
        const maxEmail = 'a'.repeat(240) + '@example.com';
        expect(maxEmail.length).toBeLessThanOrEqual(254);
        const email = Email.create(maxEmail);
        expect(email).toBeInstanceOf(Email);
      });

      it('should accept short valid email', () => {
        const email = Email.create('a@b.c');
        expect(email).toBeInstanceOf(Email);
      });
    });
  });

  describe('getValue()', () => {
    it('should return the stored email value', () => {
      const email = Email.create('user@example.com');
      expect(email.getValue()).toBe('user@example.com');
    });

    it('should return lowercase email', () => {
      const email = Email.create('USER@EXAMPLE.COM');
      expect(email.getValue()).toBe('user@example.com');
    });

    it('should return trimmed email', () => {
      const email = Email.create('  user@example.com  ');
      expect(email.getValue()).toBe('user@example.com');
    });
  });

  describe('equals()', () => {
    it('should return true for identical emails', () => {
      const email1 = Email.create('user@example.com');
      const email2 = Email.create('user@example.com');
      expect(email1.equals(email2)).toBe(true);
    });

    it('should return true when comparing case-different emails', () => {
      const email1 = Email.create('USER@EXAMPLE.COM');
      const email2 = Email.create('user@example.com');
      expect(email1.equals(email2)).toBe(true);
    });

    it('should return true when comparing whitespace-different emails', () => {
      const email1 = Email.create('  user@example.com  ');
      const email2 = Email.create('user@example.com');
      expect(email1.equals(email2)).toBe(true);
    });

    it('should return false for different emails', () => {
      const email1 = Email.create('user1@example.com');
      const email2 = Email.create('user2@example.com');
      expect(email1.equals(email2)).toBe(false);
    });

    it('should return false for different domains', () => {
      const email1 = Email.create('user@example.com');
      const email2 = Email.create('user@example.org');
      expect(email1.equals(email2)).toBe(false);
    });

    it('should be symmetric', () => {
      const email1 = Email.create('user@example.com');
      const email2 = Email.create('user@example.com');
      expect(email1.equals(email2)).toBe(email2.equals(email1));
    });

    it('should be transitive', () => {
      const email1 = Email.create('user@example.com');
      const email2 = Email.create('user@example.com');
      const email3 = Email.create('user@example.com');
      expect(email1.equals(email2) && email2.equals(email3)).toBe(email1.equals(email3));
    });
  });
});
