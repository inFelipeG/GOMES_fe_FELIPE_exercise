import styled from 'styled-components';
import {sizesAndSpace} from 'theme';

export const VerticalStack = styled.div<{amount: keyof typeof sizesAndSpace}>`
    display: flex;
    flex-direction: column;

    & > * + * {
        margin-top: ${({amount, theme}) => theme.space[amount]} !important;
    }
`;
