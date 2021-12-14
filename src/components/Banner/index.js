import styled from "styled-components";
import BannerGato from "../../static/para-gatos.jpeg";
import BannerCachorro from "../../static/para-cachorros.jpeg";

const BannerWrapper = styled.div`
  background-size: cover;
  background-position: center;
  background-image: url("${({ imgFundo }) => imgFundo}");
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 350px;

  & .banner__title {
    text-transform: uppercase;
    padding: 15px 20px;
    background-color: var(--laranja);
  }

  & .banner__title a {
    color: white;
  }
`;

const ListaBannersWrapper = styled.section`
  display: grid;
  grid-gap: 20px;

  & .banner:last-child {
    justify-content: unset;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Banner = ({ titulo, bg }) => (
  <BannerWrapper imgFundo={bg} className="banner">
    <h2 className="banner__title">
      <a href="#">{titulo}</a>
    </h2>
  </BannerWrapper>
);

const ListaBanners = () => (
  <ListaBannersWrapper>
    <Banner titulo="Para Gatos" bg={BannerGato} />
    <Banner titulo="Para Cachorros" bg={BannerCachorro} />
  </ListaBannersWrapper>
);

export { ListaBanners, Banner };
