import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${({theme}) => theme.space[6]};
    justify-content: center;
    margin: 0 auto;
    padding: ${({theme}) => theme.space[5]};
    max-width: calc(${({theme}) => `${theme.sizes[11]} + (${theme.sizes[6]} * 5)`});
    /* (theme.sizes[6] * 5) is accounting for the gap of 32px between each child. */
    /* That way the container can display up to 4 children per row since each card is 256px wide. */
    /* This is the same as setting the max-width to 1184px. */
`;
