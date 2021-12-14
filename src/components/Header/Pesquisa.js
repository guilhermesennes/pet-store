import styled from "styled-components";
import { GoSearch } from "react-icons/go";

const StyledForm = styled.form`
  & label {
    position: absolute;
    top: -100px;
    left: -100px;
  }

  & .pesquisa {
    display: flex;
    align-items: center;
  }

  & .pesquisa input {
    display: none;
    border: unset;
  }

  @media (min-width: 768px) {
    & .pesquisa input {
      display: unset;
      max-width: 170px;
    }

    & .pesquisa {
      border: 1px solid var(--cinza);
      padding: 5px;
    }
  }

  & .pesquisa svg {
    font-size: 28px;
  }
`;

const Pesquisa = () => (
  <>
    <StyledForm action="">
      <label htmlFor="#pesquisa">Pesquisa</label>

      <div className="pesquisa">
        <input
          type="text"
          value=""
          placeholder="Pesquisar..."
          id="pesquisa"
          name="pesquisar"
        />
        <GoSearch />
      </div>
    </StyledForm>
  </>
);

export default Pesquisa;
