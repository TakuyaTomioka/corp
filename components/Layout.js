// Components
import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@500;700&family=Noto+Sans+JP&display=swap" rel="stylesheet" />
      </Head>
      <Nav />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;