import Head from 'next/head';
import { client } from '../../../libs/client';
// Components
import Article from '../../components/Article';
// variables
import { webTitle } from '../../util';

export default function ArticlePage() {
  return (
    <>
      <Head>
        <title>{webTitle}記事</title>
      </Head>
      <h1>記事一覧</h1>

      <Article
        articles={articles}
      />
    </>
  )
}
export const getStaticProps = async () => {

  const articles = await client.get({ endpoint: 'articles' });

  return {
    props: {
      articles: articles.contents,
    },
  };
};