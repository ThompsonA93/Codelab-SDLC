import { z } from 'zod';

export const registerUserSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .max(50, 'Username cannot exceed 50 characters'),
  email: z
    .string()
    .email('Invalid email address format')
    .max(255),
  passwordPlain: z
    .string()
    .min(8, 'Password must be at least 8 characters long'),
});

export const loginUserSchema = z.object({
  email: z.string().email('Invalid email address format'),
  passwordPlain: z.string(),
});

export type RegisterUserRequest = z.infer<typeof registerUserSchema>;
export type LoginUserRequest = z.infer<typeof loginUserSchema>;