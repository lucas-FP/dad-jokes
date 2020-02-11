import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
box-sizing: border-box !important;
color:${(props) => props.theme.colors.text};
font-family:${(props) => props.theme.fonts.main}
};

h1,h2,h3{
    color:${(props) => props.theme.colors.main};
    text-transform: uppercase;
    font-family:${(props) => props.theme.fonts.second}
}

`;
