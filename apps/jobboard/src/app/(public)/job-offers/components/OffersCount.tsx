import { fetchOffersCount } from '../../../../services/offers';

export const OffersCount = async () => {
  const offersCount = await fetchOffersCount();
  return (
    <div>
      <h2 className="text-2xl">
        Offers count: <span className="font-semibold">{offersCount}</span>
      </h2>
    </div>
  );
};
