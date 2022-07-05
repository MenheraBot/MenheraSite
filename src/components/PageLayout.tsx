import { Footer } from './common/Footer';
import { Seo } from './common/Seo';
import { Header } from './common/Header';

type Props = {
  children: React.ReactNode;
  page?: string;
};

const Layout = ({ children, page }: Props): JSX.Element => {
  return (
    <>
      <Seo page={page ?? 'sexo'} />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
