import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Container} from 'components/Container';

const spinAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
    animation: ${spinAnimation} 800ms linear infinite;
    border: 4px solid #d1d5db;
    border-radius: 50%;
    border-top-color: #3b82f6;
    width: 4rem;
    height: 4rem;
`;

export const LoadingSpinner = () => {
    return (
        <Container>
            <Spinner data-testid="loading-spinner" />
        </Container>
    );
};
