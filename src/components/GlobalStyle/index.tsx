import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: ${({theme}) => theme.fonts.sans};
        margin: 0;
        outline: 0;
        padding: 0;
    }
`;
