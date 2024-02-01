import { JobOffer } from '@prisma/client';
import db from '@jobboard/prisma-client';

export const fetchJobOffers = async () => {
  return db.jobOffer.findMany({
    select: {
      public_id: true,
      title: true,
      description: true,
      salary: true,
    },
  });
};

export const fetchOffer = async (publicId: JobOffer['public_id']) => {
  return db.jobOffer.findUnique({ where: { public_id: publicId } });
};
