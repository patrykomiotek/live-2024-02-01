import { Header } from '@jobboard/common-ui';
import db from '@jobboard/prisma-client';

export default async function IndexPage() {
  return (
    <div id="welcome">
      <Header>
        <span> Hello there, </span>
        Welcome jobboard 👋
      </Header>
    </div>
  );
}
