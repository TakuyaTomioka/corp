import styled from 'styled-components';

export default function Home() {
  return (
    <StyledHome>
      <p>Hello World</p>
    </StyledHome>
  )
}

const StyledHome = styled.div`
  height: 100vh;
  width: 80%;
  margin: 0 auto;
  background: rgba(0,0,0, 0.2);
`;
