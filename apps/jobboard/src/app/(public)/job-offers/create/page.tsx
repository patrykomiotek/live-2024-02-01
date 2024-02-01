import { Button, Header, Input } from '@jobboard/common-ui';

import { createJobOfferAction } from './actions';

export default function CreateOfferPage() {
  return (
    <div>
      <Header>Create Offer</Header>
      <form action={createJobOfferAction}>
        <Input label="Title" name="title" />
        <Input label="Description" name="description" />
        <Input label="Position" name="position" />
        <Input label="Salary" name="salary" type="number" />
        <Input label="Company" name="company" />
        <Input label="City" name="city" />
        <Button label="Submit" type="submit" />
      </form>
    </div>
  );
}
