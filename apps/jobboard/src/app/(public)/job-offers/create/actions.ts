'use server';

import { z } from 'zod';
import { JobOffer } from '@prisma/client';
import db from '@jobboard/prisma-client';
import { redirect } from 'next/navigation';

const offerSchema = z.object({
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

export const createJobOfferAction = async (data: FormData) => {
  // console.log({ data: data.get('title') });
  // TODO: refactor this
  const title = data.get('title') as string;
  const description = data.get('description') as string;
  const position = data.get('position') as string;
  const salary = parseFloat(data.get('salary') as string);
  const company = data.get('company') as string;
  const city = data.get('city') as string;

  const offer = offerSchema.parse({
    title,
    description,
    position,
    salary,
    company,
    city,
  });

  await db.jobOffer.create({ data: offer });

  redirect('/job-offers');
};
