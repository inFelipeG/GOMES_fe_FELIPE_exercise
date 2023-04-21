import styled from 'styled-components';

export const MainContent = styled.main`
    background-color: ${({theme}) => theme.colors.gray200};
    border: 2px dashed ${({theme}) => theme.colors.gray400};
    border-radius: ${({theme}) => theme.radii.base};
    margin: 0 ${({theme}) => theme.space[6]} ${({theme}) => theme.space[6]};
    padding: ${({theme}) => theme.space[5]} ${({theme}) => theme.space[6]};
`;
