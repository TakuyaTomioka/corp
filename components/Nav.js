// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLightbulb, faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
// Styles
import { device } from '../components/MediaQuery';
import { color, font } from './Variables';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/router';

const Nav = () => {
  const { pathname } = useRouter();
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
        <li>
          <FontAwesomeIcon icon={faLightbulb} />
          <Link href="/service"><a>ちょっと解決</a></Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/service" ? "100%" : "0%" }}
          />
        </li>
        <li>
          <FontAwesomeIcon icon={faNewspaper} />
          <Link href="/article"><a>ちょっと知る</a></Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/article" ? "100%" : "0%" }}
          />
        </li>
        <li>
          <FontAwesomeIcon icon={faUserEdit} />
          <Link href="/about"><a>ちょっと誰？</a></Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/about" ? "100%" : "0%" }}
          />
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          <Link href="/contact"><a>ちょっと相談</a></Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "100%" : "0%" }}
          />
        </li>
      </Menu>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  padding: 20px 40px;
  /* background: #66a1ce; */
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet}{
    /* background: blue; */
  }
  @media ${device.laptopL}{
    /* background: orange; */
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  min-width: 200px;
  h1{
    font-size: ${font.base};
    font-weight: 700;
    padding-left:24px;
    font-family: 'M PLUS 1p', sans-serif;
  }
`;

const Menu = styled.ul`
  display: flex;
  li{
    font-size: ${font.sm};
    font-weight: 500;
    font-family: 'M PLUS 1p', sans-serif;
    color: ${color.text};
    &:nth-child(n+1){
      padding-left: 30px;
    }
    a{
      padding-left: 5px;
      color: ${color.mineShaft};
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: ${color.algaeGreen};
  width: 0%;
`;

export default Nav;