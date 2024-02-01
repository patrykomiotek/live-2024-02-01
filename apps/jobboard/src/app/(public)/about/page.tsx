import { Metadata } from 'next';

import { Header } from '@jobboard/common-ui';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <div>
      <Header>About</Header>
    </div>
  );
}
