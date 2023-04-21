import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${({theme}) => theme.space[6]} 0;
`;

const BackButton = styled.button`
    background: none;
    border: 0;
    cursor: pointer;
    font-size: ${({theme}) => theme.fontSizes.xl};
    line-height: ${({theme}) => theme.lineHeights.xl};
    padding: 0;
`;

const Title = styled.h1`
    color: ${({theme}) => theme.colors.gray900};
    font-size: ${({theme}) => theme.fontSizes.xl};
    line-height: ${({theme}) => theme.lineHeights.xl};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    margin-left: ${({theme}) => theme.space[4]};
`;

type HeaderProps = {
    title: string;
    showBackButton?: boolean;
};

export const Header = ({title, showBackButton}: HeaderProps) => {
    const navigate = useNavigate();

    return (
        <Container data-testid="header-container">
            {showBackButton && (
                <BackButton
                    data-testid="back-button"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    🔙
                </BackButton>
            )}
            <Title data-testid="header-title">{title}</Title>
        </Container>
    );
};
