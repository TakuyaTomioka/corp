import Head from 'next/head';
// variables
import { webTitle } from '../../util';

export default function Service() {
  return (
    <>
      <Head>
        <title>{webTitle}事業紹介</title>
      </Head>
      <h1>サービス</h1>
    </>
  )
}