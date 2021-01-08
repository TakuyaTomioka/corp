import Head from 'next/head';
// variables
import { webTitle } from '../../util';

export default function Article() {
  return (
    <>
      <Head>
        <title>{webTitle}運営</title>
      </Head>
      <h1>About Page</h1>
    </>
  )
}