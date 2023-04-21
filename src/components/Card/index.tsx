import React from 'react';
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';

export const CardAvatar = styled.img`
    border-radius: ${({theme}) => theme.radii.full};
    width: ${({theme}) => theme.sizes[8]};
    height: ${({theme}) => theme.sizes[8]};
`;

const SharedCardBodyStyle = css`
    display: flex;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.white};
    border: 1px solid ${({theme}) => theme.colors.gray100};
    border-radius: ${({theme}) => theme.radii.base};
    box-shadow: ${({theme}) => theme.shadows.base};
    padding: ${({theme}) => theme.sizes[6]};
    text-align: center;
    text-decoration: none;
    width: ${({theme}) => theme.sizes[9]};
`;

const StyledLink = styled(Link)`
    ${SharedCardBodyStyle}
`;

const Container = styled.div`
    ${SharedCardBodyStyle}
`;

type CardProps = {
    url?: string;
    children: React.ReactNode;
};

export const CardBody = ({url, children}: CardProps) => {
    return url ? (
        <StyledLink to={url} data-testid="card-body">
            {children}
        </StyledLink>
    ) : (
        <Container data-testid="card-body">{children}</Container>
    );
};

const SharedCardTypographyStyle = css`
    font-size: ${({theme}) => theme.fontSizes.sm};
    font-weight: ${({theme}) => theme.fontWeights.medium};
    line-height: ${({theme}) => theme.lineHeights.sm};
`;

export const CardPrimaryText = styled.p`
    ${SharedCardTypographyStyle}
    color: ${({theme}) => theme.colors.gray900};
`;

export const CardSecondaryText = styled.h3`
    ${SharedCardTypographyStyle}
    color: ${({theme}) => theme.colors.gray500};
`;
