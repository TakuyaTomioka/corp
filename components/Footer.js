import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      &copy;ちょっとWeb
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  padding:10px 20px;
  width: 100%;
  text-align: center;
  background: #767676;
`;

export default Footer;