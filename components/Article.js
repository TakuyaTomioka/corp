// Components
import ArticleCard from './ArticleCard';
// Styled
import styled from 'styled-components';
import { color, font } from './Variables';
import { device } from './MediaQuery';

const Article = ({ articles }) => {
  return (
    <ArticleContainer>
      <h2>ちょっと知る</h2>
      <ArticleCard
        articles={articles}
      />
    </ArticleContainer>
  )
};

const ArticleContainer = styled.div`
  h2{
    @media ${device.laptopL}{
      font-size:${font.xl};
      text-align: center;
      padding: 200px 0;
    }
  }
`

export default Article;