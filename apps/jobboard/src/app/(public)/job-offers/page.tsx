import { Metadata } from 'next';

import { Header } from '@jobboard/common-ui';

import { fetchJobOffers } from '../../../services/offers';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Job Offers',
};

export default async function JobOffersPage() {
  const jobOffers = await fetchJobOffers();

  return (
    <div>
      <Header>Job Offers</Header>
      <div className="mb-6">
        <Link
          href="/job-offers/create"
          className="underline hover:text-base text-blue-600"
        >
          Create offer
        </Link>
      </div>
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
}
