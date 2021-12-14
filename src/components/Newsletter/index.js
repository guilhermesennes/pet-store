import styled from "styled-components";
import FavIcon from "../../static/favicon.png";
import Botao from "../../components/Botao";
import Container from "../container/Container";

const BotaoSubmit = styled(Botao).attrs({ as: "button" })`
  border: unset;
  cursor: pointer;
`;

const bulletTextos = [
  {
    titulo: "Entrega gratuita",
    texto: "a partir de R$ 99",
  },
  {
    titulo: "Parcelamento",
    texto: "sem juros",
  },
  {
    titulo: "Cadastre-se",
    texto: "e ganhe desconto",
  },
];

const BulletPointWrapper = styled.div`
  display: flex;
  align-items: center;

  & .bulletpoint__icon {
    width: 38px;
    height: auto;
    margin-right: 10px;
  }

  & .bulletpoint__title {
    text-transform: uppercase;
    font-size: 14px;
    color: white;
  }

  & .bulletpoint__title strong {
    color: white;
    margin-right: 5px;
  }
`;

const NewsletterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: var(--roxo);

  & header {
    display: grid;
    grid-gap: 12px;
    padding-top: 10px;
    padding-bottom: 20px;
    border-bottom: 2px solid var(--laranja);

    @media (min-width: 520px) {
      grid-template-columns: 1fr 1fr;
      justify-items: center;
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  & main {
    margin: 40px auto;
  }

  & footer {
    margin-bottom: 20px;
  }

  & .newsletter__title {
    color: white;
    text-align: center;
    margin-bottom: 10px;
  }

  & .newsletter__subtitle {
    color: white;
    text-align: center;
    margin-bottom: 0;
  }
`;

const FormularioWrapper = styled.form`
  display: flex;
  flex-direction: column;

  & .formulario__label {
    position: absolute;
    left: -1000px;
    color: white;
  }

  & .formulario__input {
    background-color: transparent;
    color: white;
    font-weight: 500;
    font-size: 16px;
    border: unset;
    border-bottom: 1px solid white;
    padding: 15px 0px;
    margin-bottom: 20px;
  }

  & .formulario__input:focus {
    border-bottom: 1px solid var(--laranja);
    color: var(--laranja);
    outline: unset;
  }

  & .formulario__submit {
    text-align: center;
    align-self: flex-start;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    max-width: 800px;
    margin: 0 auto;

    & .formulario__input:first-of-type {
      width: 25%;
    }

    & .formulario__input:last-of-type {
      width: 40%;
    }
  }
`;

const BulletPoint = ({ titulo, texto }) => (
  <BulletPointWrapper className="bulletpoint">
    <img
      src={FavIcon}
      alt="Ícone de coração laranja com uma pata no meio"
      className="bulletpoint__icon"
    />
    <h4 className="bulletpoint__title">
      <strong>{titulo}</strong>
      {texto}
    </h4>
  </BulletPointWrapper>
);

const Formulario = () => (
  <FormularioWrapper className="formulario">
    <label htmlFor="nome" className="formulario__label">
      Nome
    </label>
    <input
      type="text"
      name="nome"
      id="nome"
      value=""
      className="formulario__input"
      placeholder="Nome"
    />
    <label htmlFor="email" className="formulario__label">
      E-mail
    </label>
    <input
      type="text"
      name="email"
      id="email"
      value=""
      className="formulario__input"
      placeholder="E-mail"
    />
    <BotaoSubmit className="formulario__submit">Enviar</BotaoSubmit>
  </FormularioWrapper>
);

const Newsletter = () => (
  <NewsletterWrapper className="newsletter">
    <Container>
      <header>
        {bulletTextos.map(({ titulo, texto }) => (
          <BulletPoint titulo={titulo} texto={texto} />
        ))}
      </header>
      <main>
        <h2 className="newsletter__title">Assine nossa newsletter</h2>
        <p className="newsletter__subtitle">
          Cadastre-se para receber nossas novidades e descontos exclusivos!
        </p>
      </main>
      <footer>
        <Formulario />
      </footer>
    </Container>
  </NewsletterWrapper>
);

export { Formulario, Newsletter, BulletPoint };
