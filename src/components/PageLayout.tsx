import { Footer } from './common/Footer';
import { Seo } from './common/Seo';
import { Header } from './common/Header';
import { Announcement } from './Annoucement';

type Props = {
  children: React.ReactNode;
  page: string;
};

const Layout = ({ children, page }: Props): JSX.Element => {
  return (
    <>
      <Seo page={page} />
      <Header />
      <Announcement />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
