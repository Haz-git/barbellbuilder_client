import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        height: 100%;
        background: ${({ theme }) => theme.background};
        font-family: 'Nunito', sans-serif, helvetica;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    h1 {
        margin: 0;
    }

    h2 {
        margin: 0;
    }

    h3 {
        margin: 0;
    }


`;
