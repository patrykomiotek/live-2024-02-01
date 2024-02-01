import { z } from 'zod';

export const offerSchema = z.object({
  title: z
    .string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be at least 50 characters'),
  description: z
    .string()
    .min(3, 'Must be at least 3 characters')
    .max(500, 'Must be at least 500 characters'),
  position: z
    .string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be at least 50 characters'),
  salary: z
    .number()
    .min(1, 'Must be at least 1')
    .max(1000000, 'Must be at least 1000000 characters'),
  company: z
    .string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be at least 50 characters'),
  city: z
    .string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be at least 50 characters'),
});

export type CreateOfferDto = z.infer<typeof offerSchema>;
