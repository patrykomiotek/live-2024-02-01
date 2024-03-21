import { Metadata } from 'next';

import { Header } from '@jobboard/common-ui';

import Link from 'next/link';
import { fetchOffer } from '../../../../services/offers';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';

// export const metadata: Metadata = {
//   title: 'Job Offers',
// };

type Params = {
  params: {
    publicId: string;
  };
};

export default async function JobOfferPage({ params }: Params) {
  console.log(params.publicId);
  const offer = await fetchOffer(params.publicId);
  console.log(offer);

  if (!offer) {
    notFound();
  }

  return (
    <div>
      <Header>Job Offer</Header>
      <div className="mb-6">
        <Link href="/job-offers" className="underline text-blue-600">
          Back to list
        </Link>
      </div>
      <div key={offer.public_id} className="my-4">
        <h2 className="font-bold text-2xl">{offer.title}</h2>
        <p>{offer.description}</p>
        <p>Salary: {offer.salary} PLN</p>
        <p>{format(offer.created_at, 'dd.MM.yyyy HH:mm')}</p>
      </div>
    </div>
  );
}
