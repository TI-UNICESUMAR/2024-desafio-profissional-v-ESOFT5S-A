import { z } from 'zod';

export interface CreateCategoryDTO {
    name: string,
    color: string
}

export const CreateCategorySchema = z.object({
    name: z.string(),
    color: z.string()
})