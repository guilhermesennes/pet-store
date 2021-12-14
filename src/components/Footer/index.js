import styled from "styled-components";
import Logo from "../../static/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import LogoSerie from "../../static/logo-serie.png";
import arrBandeiras from "./Bandeiras";
import Container from "../container/Container";

const links = {
  titulo: "Pet Store",
  itens: [
    "Quem Somos",
    "Como Comprar",
    "Trocas e Devoluções",
    "Frete e Entregas",
  ],
};

const contato = {
  titulo: "Contato",
  itens: ["(99) 9999-9999", "(99) 9999-9999", "petstore@petstore.com.br"],
};

const FooterWrapper = styled.footer`
  padding: 10px;

  & main {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid hsl(0, 0%, 80%);
  }

  & .footer__branding {
    margin: 30px auto;
  }

  & .footer__branding img {
    display: block;
    margin: 0 auto;
  }

  & .footer__info {
    display: block;
    text-align: center;
    margin-bottom: 10px;
  }

  & footer {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
  }

  & footer h5 {
    margin-right: 10px;
  }

  @media (min-width: 520px) {
    & main {
      display: grid;
      grid-gap: 20px;
      justify-items: center;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 768px) {
    & main {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1024px) {
    & main {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 300px;
  align-items: center;
  padding: 10px;
  margin: 20px auto;

  & .icones__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
  }

  & .icones__item:before {
    width: 36px;
    height: 36px;
    display: flex;
    position: absolute;
    z-index: -1;
    content: " ";
    background-color: var(--cinza);
    border-radius: 50px;
  }

  & .icones__item:hover:before {
    background-color: var(--laranja);
  }

  & .icones__item svg {
    width: 22px;
    height: 22px;
    fill: white;
  }
`;

const ListaWrapper = styled.div`
  padding: 10px 0;

  .lista__title {
    text-transform: uppercase;
    margin-bottom: 20px;
    font-weight: 600;
    color: var(--roxo);
  }

  & ul {
    padding: 0;
  }

  & li {
    list-style: none;
    margin-bottom: 10px;
    font-weight: 600;
  }
`;

const Bandeiras = styled.div`
  display: grid;
  justify-content: left;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  grid-template-rows: 1fr 1fr;
`;

const Lista = ({ titulo, arrLinks }) => {
  console.log(arrLinks);
  return (
    <ListaWrapper className="lista">
      <h4 className="lista__title">{titulo}</h4>

      <ul>
        {arrLinks.map((elem) => (
          <a href="#">
            <li key={elem}>{elem}</li>
          </a>
        ))}
      </ul>
    </ListaWrapper>
  );
};

const Footer = () => (
  <Container>
    <FooterWrapper className="footer">
      <main>
        <section className="footer__branding">
          <img src={Logo} alt="Logotipo Pet Store" />

          <IconsWrapper className="icones">
            <a href="#" className="icones__item">
              <FaFacebookF />
            </a>
            <a href="#" className="icones__item">
              <FaInstagram />
            </a>
            <a href="#" className="icones__item">
              <FaTwitter />
            </a>
          </IconsWrapper>

          <span className="footer__info">© 2019 • CNPJ 00.000.000/0000-00</span>
          <span className="footer__info">
            Rua Tal de Tal, 123 - Cidade, Estado
          </span>
        </section>

        <section className="footer__links">
          <Lista titulo={links.titulo} arrLinks={links.itens} />
        </section>

        <section className="footer__links">
          <Lista titulo={contato.titulo} arrLinks={contato.itens} />
        </section>

        <section className="footer__pagamento">
          <ListaWrapper>
            <h4 className="lista__title">Pagamento</h4>

            <Bandeiras>
              {arrBandeiras.map((e) => (
                <img src={e} alt="Bandeira de cartão" />
              ))}
            </Bandeiras>
          </ListaWrapper>
        </section>
      </main>
      <footer>
        <h5>Tecnologia e desenvolvimento</h5>
        <img src={LogoSerie} alt="Logotipo da Seri.e Design" />
      </footer>
    </FooterWrapper>
  </Container>
);

export default Footer;
