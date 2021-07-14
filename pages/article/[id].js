import { client } from '../../libs/client';

export default function ArticlesId({ articles }) {
  return (
    <main>
      <h1>{articles.title}</h1>
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