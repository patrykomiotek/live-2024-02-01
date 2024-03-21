'use server';

import db from '@jobboard/prisma-client';
import { redirect } from 'next/navigation';
import { CreateOfferDto, createOfferSchema } from './types';
import { ZodError } from 'zod';

// export const createJobOfferAction = async (data: FormData) => {
export const createJobOfferAction = async (data: CreateOfferDto) => {
  // console.log({ data: data.get('title') });
  // TODO: refactor this
  // const title = data.get('title') as string;
  // const description = data.get('description') as string;
  // const position = data.get('position') as string;
  // const salary = parseFloat(data.get('salary') as string);
  // const company = data.get('company') as string;
  // const city = data.get('city') as string;

  // const offer = offerSchema.parse({
  //   title,
  //   description,
  //   position,
  //   salary,
  //   company,
  //   city,
  // });

  try {
    const offer = createOfferSchema.parse(data);

    await db.jobOffer.create({ data: offer });

    return { status: 'ok', message: 'created' }; // 201 created
  } catch (error) {
    if (error instanceof ZodError) {
      // logger
      return { status: 'error', message: 'sth' }; // 400
    }
    // } else if (error instanceof Prisma) { // TODO: check error type
    //
    // }
  }

  return { status: 'error', message: 'sth' }; // 400
};
