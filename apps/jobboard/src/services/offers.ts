import { JobOffer } from '@prisma/client';
import db from '@jobboard/prisma-client';
import { unstable_noStore as noStore } from 'next/cache';

export const fetchJobOffers = async (query: string | null) => {
  const whereQuery = query
    ? {
        title: {
          contains: query,
          mode: 'insensitive',
        },
      }
    : {};

  return db.jobOffer.findMany({
    select: {
      public_id: true,
      title: true,
      description: true,
      salary: true,
    },
    where: whereQuery, // TODO: <-- Here we use the whereQuery
  });
};

export const fetchOffer = async (publicId: JobOffer['public_id']) => {
  return db.jobOffer.findUnique({
    where: { public_id: publicId },
    select: {
      public_id: true,
      city: true,
      salary: true,
      title: true,
      description: true,
      created_at: true,
    },
  }); //
};

const wait = async (ms: number) =>
  setTimeout(() => {
    return;
  }, ms);

export const fetchOffersCount = async () => {
  await wait(5000);
  // noStore(); -- omit data store
  return db.jobOffer.count();
};
