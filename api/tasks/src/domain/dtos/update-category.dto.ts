import { z } from 'zod';

export interface UpdateCategoryDTO {
    name: string,
    color: string
}

export const UpdateCategorySchema = z.object({
    name: z.string().optional(),
    color: z.string().optional()
})