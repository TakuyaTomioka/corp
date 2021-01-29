import Head from 'next/head';
import Link from 'next/link';
// Components
import Services from '../components/Service';
import ServiceCard from '../components/ServiceCard';
// Variables
import { webTitle } from '../util';
import { color, font } from '../components/Variables';
// Styled
import { device } from '../components/MediaQuery';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

export default function Home({ services }) {
  return (
    <>
      <Head>
        <title>{webTitle}トップページ</title>
      </Head>
      <Main>
        <h1>明日の<span>Web</span>を<br />
        もう<span>ちょっと</span>よくする</h1>
        <img src="mv.jpg" alt="Main Visual" />
      </Main>
      <Services
        services={services}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };

  const res = await fetch(process.env.ENDPOINT + '/service', key);

  const data = await res.json();

  return {
    props: {
      services: data.contents,
    },
  };
};

const Main = styled(motion.main)`
  position: relative;
  h1{
    color: ${color.cornField};
    font-size: ${font.lg};
    position: absolute;
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
  img{
    width: 100%;
  }
`;