import Link from 'next/link';
// Styled
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { color, font } from './Variables';
import { device } from '../components/MediaQuery';

const Card = ({ services }) => {
  return (
    <StyledServiceCard>
      {services.map(service => (
        <Link href="/services/[id]" as={`services/${service.id}`} key={service.id}>
          <a>
            <img src={service.image.url + "?fm=webp&w=400"} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </a>
        </Link>
      ))}
    </StyledServiceCard>
  )
}

const StyledServiceCard = styled.div`
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


export default Card;