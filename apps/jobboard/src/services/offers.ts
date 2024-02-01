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
