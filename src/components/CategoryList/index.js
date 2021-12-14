import styled from "styled-components";

import Banner1 from "../../static/banner1.jpeg";
import Banner2 from "../../static/banner2.jpeg";
import Banner3 from "../../static/banner3.jpeg";

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  position: relative;

  background-image: url("${({ imgFundo }) => imgFundo}");
  background-size: cover;
  background-position: center;
  cursor: pointer;

  &:after {
    width: 100%;
    height: 100%;
    content: " ";
    position: absolute;
    background-color: hsla(0, 0%, 0%, 0.5);
  }

  & .Category__title {
    z-index: 1;
    font-size: 26px;
    color: white;
  }
`;

const CategoryListWrapper = styled.section`
  background-color: var(--laranja);
  margin: 0 auto;
  max-width: 1170px;
  padding: 20px;
  display: grid;
  grid-gap: 15px;

  @media (min-width: 520px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Category = ({ nome, bg }) => (
  <CategoryWrapper imgFundo={bg}>
    <h3 className="Category__title">{nome}</h3>
  </CategoryWrapper>
);

const CategoryList = ({ category }) => (
  <section style={{ backgroundColor: "var(--laranja)" }}>
    <CategoryListWrapper>
      <Category nome="Rações" bg={Banner1} />
      <Category nome="Brinquedos" bg={Banner2} />
      <Category nome="Acessórios" bg={Banner3} />
    </CategoryListWrapper>
  </section>
);

export { Category, CategoryList };
