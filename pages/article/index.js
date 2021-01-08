import Head from 'next/head';
// variables
import { webTitle } from '../../util';

export default function Article() {
  return (
    <>
      <Head>
        <title>{webTitle}記事</title>
      </Head>
      <h1>記事</h1>
    </>
  )
}