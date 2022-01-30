import { createGlobalStyle, css } from "styled-components";

const theme = css`
    :root{
        --foryou-green-700: #006F67;
        --foryou-green-100: #3EFFF2;
        --foryou-green-400: #4ba8a2db;
    }
`

const GlobalStyle = createGlobalStyle(theme)

export default GlobalStyle;