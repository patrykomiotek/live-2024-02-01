import { Metadata } from 'next';

import { Header } from '@jobboard/common-ui';

import Link from 'next/link';
import { fetchOffer } from '../../../../services/offers';
import { notFound } from 'next/navigation';

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
      <Link href="/job-offers">Back to list</Link>
      <div key={offer.public_id} className="my-4">
        <h2 className="font-bold text-2xl">{offer.title}</h2>
        <p>{offer.description}</p>
        <p>Salary: {offer.salary} PLN</p>
      </div>
    </div>
  );
}
