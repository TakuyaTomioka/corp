import Link from 'next/link';
// Styled
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { color, font } from './Variables';
import { device } from './MediaQuery';

const BlogCard = ({ articles }) => {
  return (
    <StyledArticleCard>
      {articles.map(article => (
        <Link href="/article/[id]" as={`article/${article.id}`} key={article.id}>
          <a>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <p>{article.tag}</p>
            <img src={article.thumbnail.url} alt={article.title} />
          </a>
        </Link>
      ))}
    </StyledArticleCard>
  )
}

const StyledArticleCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  @media ${device.laptopL}{
    
  }
  a{
    width: 400px;
    margin: 0 25px 100px 25px;
    img{
      width:  100%;
    }
    h3{
      font-size: ${font.base};
      padding: 10px 0px;
    }
    p{
      font-size: ${font.sm};
      padding: 10px 0px;
    }
  }
`;


export default BlogCard;