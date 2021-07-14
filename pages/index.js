import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import { client } from "../libs/client";
// Components
import Services from '../components/Service';
import ServiceCard from '../components/ServiceCard';
import Article from '../components/Article';
// Variables
import { webTitle } from '../util';
import { color, font } from '../components/Variables';
// Styled
import { device } from '../components/MediaQuery';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

export default function Home({ services, articles }) {
  return (
    <>
      <Head>
        <title>{webTitle}トップページ</title>
      </Head>
      <Main>
        <h1>明日の<span>Web</span>を<br />
          もう<span>ちょっと</span>よくする</h1>
        <Image src="/mv.jpg" width={1440} height={985} alt="Main Visual" />
      </Main>
      <Services
        services={services}
      />
      <Article
        articles={articles}
      />
    </>
  );
};

export const getStaticProps = async () => {

  const data = await client.get({ endpoint: 'service' });
  const articles = await client.get({ endpoint: 'articles' });

  return {
    props: {
      services: data.contents,
      articles: articles.contents,
    },
  };
};

const Main = styled(motion.main)`
  position: relative;
  h1{
    color: ${color.cornField};
    font-size: ${font.lg};
    position: absolute;
    z-index: 10;
    span{
      color: ${color.coralRed};
    }
    @media ${device.tablet}{
      font-size: ${font.xl};
    }
    @media ${device.laptopL}{
      font-size: ${font.xl2};
      bottom: 300px;
      left: 150px;
      letter-spacing: 15px;
    }
  }
  /* img{
    width: 100%;
  } */
`;