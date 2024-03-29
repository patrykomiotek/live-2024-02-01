import { NavBar } from '../../components/NavBar';

type Props = {
  children: React.ReactNode;
};

export default function PublicLayout({ children }: Props) {
  return (
    <>
      <div className="mx-auto bg-slate-900 py-2">
        <div className="container mx-auto text-white py-2">
          <NavBar />
        </div>
      </div>
      <div className="mx-auto py-2 mt-2">
        <div className="container mx-auto py-4">{children}</div>
      </div>
    </>
  );
}
