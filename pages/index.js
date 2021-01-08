import Head from 'next/head';
// variables
import { webTitle } from '../util';

export default function Home() {
  return (
    <>
      <Head>
        <title>{webTitle}トップページ</title>
      </Head>
      <main>
        <h1>Top Page</h1>
      </main>
    </>
  )
}