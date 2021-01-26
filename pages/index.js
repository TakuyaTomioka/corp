import Head from 'next/head';
// variables
import { webTitle } from '../util';
// Styled
import { color, font } from '../components/Variables';
import { device } from '../components/MediaQuery';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>{webTitle}トップページ</title>
      </Head>
      <Main>
        <h1>明日の<span>Web</span>を<br />
        もう<span>ちょっと</span>よくする</h1>
        <img src="mv.jpg" alt="" />
      </Main>
    </>
  )
}

const Main = styled(motion.main)`
  position: relative;
  h1{
    color: white;
    font-size: ${font.lg};
    position: absolute;
    span{
      color: ${color.main};
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