import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    /* Reseta as margens, espaçamentos e define box-sizing */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* Estilização do foco nos elementos interativos */
    :focus {
        outline: none;
    }

    /* Estilo global para o body */
    body {
        background-color: ${(props) => props.theme["Gray-900"]};
        color: ${(props) => props.theme["Branco"]};

    }

    /* Fontes globais para o texto */
    body, input, textarea, button {
        font-family: "Geist", serif;
        font-size: 1rem;
        font-weight: 400;
    }
`
