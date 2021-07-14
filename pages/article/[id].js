import { client } from '../../libs/client';
// Styled
import { device } from '../../components/MediaQuery';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

export default function ArticlesId({ articles }) {
  return (
    <main>
      <h1>{articles.title}</h1>
      <img src={articles.thumbnail.url} alt={articles.title} />
      <p>{articles.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${articles.body}`,
        }}
      />
    </main>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'articles' });

  const paths = data.contents.map((content) => `/article/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'articles', contentId: id });

  return {
    props: {
      articles: data,
    },
  };
};