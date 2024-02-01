'use server';

import db from '@jobboard/prisma-client';
import { redirect } from 'next/navigation';
import { CreateOfferDto, offerSchema } from './types';

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

  const offer = offerSchema.parse(data);

  await db.jobOffer.create({ data: offer });

  // redirect('/job-offers');

  return { status: 'ok' };
};
