import { Metadata } from 'next';

import { Header } from '@jobboard/common-ui';

import { fetchJobOffers, fetchOffersCount } from '../../../services/offers';
import Link from 'next/link';
import { Search } from './components/Search';
import { OffersCount } from './components/OffersCount';
import { OffersList } from './components/OffersList';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Job Offers',
};

type Params = {
  searchParams?: {
    query?: string;
  };
};

export default async function JobOffersPage({ searchParams }: Params) {
  const query = searchParams?.query || null;

  // const jobOffers = await fetchJobOffers(query); // 10sec.
  // const offersCount = await fetchOffersCount(); // 5sec.
  // Loading... 15sek

  console.log({ searchParams });

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

      <Suspense fallback={<p>Count loading...</p>}>
        <OffersCount />
      </Suspense>

      <Search />

      <Suspense fallback={<p>List loading...</p>}>
        <OffersList query={query} />
      </Suspense>
    </div>
  );
}
