// Components
import ServiceCard from './ServiceCard';
// Styled
import styled from 'styled-components';
import { color, font } from './Variables';
import { device } from '../components/MediaQuery';

const Service = ({ services }) => {
  return (
    <ServiceContainer>
      <h2>ちょっと解決</h2>
      <ServiceCard
        services={services}
      />
    </ServiceContainer>
  )
};

const ServiceContainer = styled.div`
  h2{
    @media ${device.laptopL}{
      font-size:${font.xl};
      text-align: center;
      padding: 200px 0;
    }
  }
`

export default Service;