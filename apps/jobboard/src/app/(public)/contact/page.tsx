import { Metadata } from 'next';

import { Header } from '@jobboard/common-ui';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <div>
      <Header>Contact</Header>
    </div>
  );
}
