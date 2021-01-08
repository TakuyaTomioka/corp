import React from 'react';
// Style
import Layout from '../components/Layout';
import GlobalStyles from '../components/GlobalStyles';

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};
export default App;