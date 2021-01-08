// Styles
import { device } from '../components/MediaQuery';
import styled from 'styled-components';
import Link from 'next/link'
import Image from 'next/image';

const Nav = () => {
  return (
    <StyledNav>
      <Link href="/">
        <a>
          <Logo>
            <Image
              src="/Logo.svg"
              alt="ロゴ"
              width={80}
              height={100}
            />
            <h1>ちょっとWeb</h1>
          </Logo>
        </a>
      </Link>
      <Menu>
        <li><Link href="/service"><a>ちょっと解決</a></Link></li>
        <li><Link href="/article"><a>ちょっと知る</a></Link></li>
        <li><Link href="/about"><a>ちょっと誰？</a></Link></li>
        <li><Link href="/contact"><a>ちょっと相談</a></Link></li>
      </Menu>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  /* padding: 20px 40px; */
  background: #66a1ce;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet}{
    background: blue;
  }
  @media ${device.laptopL}{
    background: orange;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  min-width: 200px;
  h1{
    font-size: 24px;
    font-weight: bold;
    padding-left:24px;
  }
`;

const Menu = styled.ul`
  display: flex;
  li{
    font-size: 18px;
    &:nth-child(n+1){
      padding-left: 30px;
    }
  }
`;

export default Nav;