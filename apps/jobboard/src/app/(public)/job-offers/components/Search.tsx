'use client';

import { Input } from '@jobboard/common-ui';
import { useSearchParams, useRouter } from 'next/navigation';
import { ChangeEventHandler } from 'react';

export const Search = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  // TODO: use debounce
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;

    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('query', value);
      // params.set('city', 'krakow');
    } else {
      params.delete('query');
    }

    // console.log({ value, params: params.toString() });
    // pathName: /job-offers
    replace(`/job-offers?${params.toString()}`);
  };

  return (
    <div>
      <Input
        label="Search"
        onChange={handleChange}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
};
