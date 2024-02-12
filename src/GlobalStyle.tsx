import { createGlobalStyle } from "styled-components";
import { FontsCss } from "./assets/fonts/Montserrat";

export const GlobalStyle = createGlobalStyle`

body{
    margin:0;
    padding:0;
}
*{
    box-sizing: border-box;
}

${FontsCss}
`;
