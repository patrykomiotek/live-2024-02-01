'use client';

import { Button, Header, Input } from '@jobboard/common-ui';

import { createJobOfferAction } from './actions';
import { CreateOfferDto, offerSchema } from './types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { use, useTransition } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateOfferPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateOfferDto>({
    resolver: zodResolver(offerSchema),
  });
  const router = useRouter();
  const [_transition, setTransition] = useTransition();

  const handleOfferFormSubmit = async (data: CreateOfferDto) => {
    // console.log({ data });

    const result = await createJobOfferAction(data);
    if (result.status === 'ok') {
      setTransition(() => router.push('/job-offers'));
      setTransition(() => router.refresh());
    }
  };

  return (
    <div>
      <Header>Create Offer</Header>
      <form onSubmit={handleSubmit(handleOfferFormSubmit)}>
        <Input label="Title" {...register('title')} error={errors.title} />
        <Input
          label="Description"
          {...register('description')}
          error={errors.description}
        />
        <Input
          label="Position"
          {...register('position')}
          error={errors.position}
        />
        <Input
          label="Salary"
          {...register('salary', { valueAsNumber: true })}
          error={errors.salary}
          type="number"
        />
        <Input
          label="Company"
          {...register('company')}
          error={errors.company}
        />
        <Input label="City" {...register('city')} error={errors.city} />
        <Button label="Submit" type="submit" />
      </form>
    </div>
  );
}

// server-only version
// return (
//   <div>
//     <Header>Create Offer</Header>
//     <form action={createJobOfferAction}>
//       <Input label="Title" name="title" />
//       <Input label="Description" name="description" />
//       <Input label="Position" name="position" />
//       <Input label="Salary" name="salary" type="number" />
//       <Input label="Company" name="company" />
//       <Input label="City" name="city" />
//       <Button label="Submit" type="submit" />
//     </form>
//   </div>
// );
