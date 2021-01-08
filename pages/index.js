import Head from 'next/head';
// variables
import { webTitle } from '../util';

export default function Home() {
  return (
    <>
      <Head>
        <title>{webTitle}トップページ</title>
      </Head>
      <h1>Top Page</h1>
    </>
  )
}