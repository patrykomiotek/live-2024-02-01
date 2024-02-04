import Link from 'next/link';

import { fetchJobOffers } from '../../../../services/offers';

type Props = {
  query: string | null;
};

export const OffersList = async ({ query }: Props) => {
  const jobOffers = await fetchJobOffers(query);

  return (
    <div>
      {jobOffers.map((offer) => (
        <div key={offer.public_id} className="my-6">
          <h2 className="font-bold text-2xl">
            <Link
              href={`/job-offers/${offer.public_id}`}
              className="text-blue-600"
            >
              {offer.title}
            </Link>
          </h2>
          <p className="leading-8">{offer.description}</p>
          <p className="leading-8">Salary: {offer.salary} PLN</p>
        </div>
      ))}
    </div>
  );
};
