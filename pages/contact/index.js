import Head from 'next/head';
// variables
import { webTitle } from '../../util';

export default function Contact() {
  return (
    <>
      <Head>
        <title>{webTitle}お問い合わせ</title>
      </Head>
      <h1>お問い合わせ</h1>
    </>
  )
}