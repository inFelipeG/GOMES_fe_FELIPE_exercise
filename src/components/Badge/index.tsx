import styled from 'styled-components';

export const Badge = styled.div`
    align-self: center;
    background-color: ${({theme}) => theme.colors.green50};
    border: 1px solid ${({theme}) => theme.colors.green200};
    border-radius: ${({theme}) => theme.radii.full};
    color: ${({theme}) => theme.colors.green700};
    font-size: ${({theme}) => theme.fontSizes.xs};
    font-weight: ${({theme}) => theme.fontWeights.medium};
    line-height: ${({theme}) => theme.lineHeights.xs};
    padding: ${({theme}) => theme.space[2]} ${({theme}) => theme.space[5]};
`;
