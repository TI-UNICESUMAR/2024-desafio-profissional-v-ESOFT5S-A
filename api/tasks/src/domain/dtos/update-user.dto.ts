import { z } from 'zod';

export interface UpdateUserDTO {
    username: string,
    weight: Number
};

export const UpdateUserSchema = z.object({
    username: z.string().optional(),
    weight: z.number().optional()
});
