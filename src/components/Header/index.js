import styled from "styled-components";
import Pesquisa from "./Pesquisa";
import Logo from "../../static/logo.png";
import UserInfo from "./userInfo";
import Menu from "./Menu";

const StyledHeader = styled.header`
  display: grid;
  max-width: 1170px;
  margin: 0 auto;

  grid-template-columns: minmax(170px, 300px) auto auto;
  grid-gap: 15px;
  align-items: center;
  justify-content: space-around;
  padding: 18px;

  & .header__pesquisa {
    order: 1;
  }

  & .header__userInfo {
    order: 2;
  }

  & .header__logo {
    width: 100%;
  }

  & .header__logo img {
    width: 100%;
    max-width: 250px;
    display: block;
    margin: 0 auto;
  }

  @media (min-width: 520px) {
    grid-template-columns: minmax(170px, 300px) 1fr auto;

    & .header__pesquisa {
      justify-self: end;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: minmax(auto, 200px) 1fr 250px;

    & .header__pesquisa {
      order: 0;
    }

    & .header__userInfo {
      justify-self: flex-end;
    }
  }
`;

const Header = () => (
  <>
    <StyledHeader>
      <div className="header__pesquisa">
        <Pesquisa />
      </div>
      <div className="header__logo">
        <a href="/">
        <img src={Logo} alt="Logotipo Pet Store" />

        </a>
      </div>
      <div className="header__userInfo">
        <UserInfo />
      </div>
    </StyledHeader>
    <Menu />
  </>
);

export default Header;
