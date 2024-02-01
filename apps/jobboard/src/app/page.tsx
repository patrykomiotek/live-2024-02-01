import { Header } from '@jobboard/common-ui';

export default async function IndexPage() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <Header>
              <span> Hello there, </span>
              Welcome jobboard 👋
            </Header>
          </div>
        </div>
      </div>
    </>
  );
}
