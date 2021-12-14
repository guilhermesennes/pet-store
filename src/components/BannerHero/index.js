import styled from "styled-components";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import Banner from "../../static/bannerHero.jpg";

const HeroWrapper = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  background-color: #333;

  & img {
    width: 100vw;
    height: 100%;
    object-fit: cover;
    opacity: 0.75;
    object-position: center;
  }
`;

const Setas = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0px 10px;
  display: flex;
  align-self: center;
  justify-content: space-between;

  & .hero__seta {
    fill: hsl(0, 0%, 70%);
    font-size: 46px;

    &:hover {
      fill: white;
    }
  }
`;

const Hero = (props) => {
  return (
    <HeroWrapper className="hero">
      <img src={Banner} alt="TO-DO Banner 1" className="hero__img active" />
      <Setas>
        <BsChevronLeft className="hero__seta" />
        <BsChevronRight className="hero__seta" />
      </Setas>
    </HeroWrapper>
  );
};

export default Hero;
