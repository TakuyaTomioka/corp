// Components
import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;