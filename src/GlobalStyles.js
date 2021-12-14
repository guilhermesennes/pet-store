import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root {
        --laranja: #FFA200;
        --roxo: #8158C5;
        --cinza: #7F7F7F;
    }

    body {
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    body * * {
        font-family: 'Montserrat', sans-serif;
        color: var(--cinza);
        box-sizing: border-box;
    }

    h1, h2, h3 {
        font-weight: 600;
        text-transform: uppercase;
    }

    h4, h5, h6 {
        font-weight: 500;
        text-transform: unset;
        margin-top: 5px;
        margin-bottom: 5px;
    }
`;

export default GlobalStyles;
