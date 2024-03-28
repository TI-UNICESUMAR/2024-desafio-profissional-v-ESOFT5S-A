import { z } from 'zod';

export interface LoginUserDTO {
    email: string, 
    password: string
}

export const LoginUserSchema = z.object({
    email: z.string().email(),
    password: z.string()
});
