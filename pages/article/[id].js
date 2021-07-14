import { client } from '../../libs/client';
import { webTitle } from '../../util';
import { color, font, letterSpace } from '../../components/Variables';
// Styled
import { device } from '../../components/MediaQuery';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

export default function ArticlesId({ articles }) {
  return (
    <Main>
      <Title>{articles.title}</Title>
      {/* <Time>{articles.publishedAt}</Time> */}
      <Thumbnail src={articles.thumbnail.url} alt={articles.title} />
      <Body
        dangerouslySetInnerHTML={{
          __html: `${articles.body}`,
        }}
      />
    </Main>
  );
}

const Main = styled.main`
  max-width: 1440px;
`;

const Body = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
  @media ${device.tablet}{
  }
  @media ${device.laptopL}{
    width: 70%;
    margin-top: 100px;
  }
  h2{
    font-size: ${font.base};
    width: 90%;
    margin: 0 auto;
    padding-top: 20px;
    letter-spacing: ${letterSpace.normal};
    @media ${device.tablet}{
      width: 80%;
    }
    @media ${device.laptopL}{
      font-size: ${font.lg};
      width: 70%;
    }
  }
  h3{
    font-size: ${font.sm};
    width: 90%;
    margin: 0 auto;
    padding-top: 10px;
    letter-spacing: ${letterSpace.normal};
    @media ${device.tablet}{
      width: 80%;
    }
    @media ${device.laptopL}{
      font-size: ${font.base};
      width: 70%;
    }
  }
  h4{
    font-size: ${font.sm};
    width: 90%;
    margin: 0 auto;
    padding-top: 5px;
    letter-spacing: ${letterSpace.normal};
    @media ${device.tablet}{
      width: 80%;
    }
    @media ${device.laptopL}{
      font-size: ${font.sm};
      width: 70%;
    }
  }
  p{
    font-size: ${font.ssm};
    width: 90%;
    margin: 0 auto;
    letter-spacing: ${letterSpace.normal};
    line-height: 2;
    @media ${device.tablet}{
      font-size: ${font.sm};
      width: 80%;
    }
    @media ${device.laptopL}{
      width: 70%;
    }
  }
  img{
    width: 100%;
    display: block;
    margin: 0 auto;
    @media ${device.tablet}{
      width: 80%;
    }
  }
`;

const Title = styled.h1`
  display: block;
  width: 900%;
  margin: 0 auto;
  margin: 30px 0;
  @media ${device.tablet}{
    width: 80%;
    font-size: ${font.lg};
  }
  @media ${device.laptopL}{
    width: 80%;
    font-size: ${font.xl};
    margin: 100px 0;
  }
`;

const Thumbnail = styled.img`
  width: 90%;
  display: block;
  margin: 0 auto;
  @media ${device.tablet}{
    width: 80%;
  }
`;

const Time = styled.p`
  font-size: ${font.xs};
  @media ${device.tablet}{
      font-size: ${font.sm};
    }
  @media ${device.laptopL}{
    font-size: ${font.sm};
  }
`;

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