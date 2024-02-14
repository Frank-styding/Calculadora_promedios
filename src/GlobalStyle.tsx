import { createGlobalStyle } from "styled-components";
import { FontsCss } from "./assets/fonts/Montserrat";

export const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
}

body,html{
    margin:0;
    padding:0;
}

${FontsCss}
`;
