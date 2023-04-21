import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: ${({theme}) => theme.fontSizes.sm};
    line-height: ${({theme}) => theme.lineHeights.sm};
    max-width: ${({theme}) => theme.sizes[9]};
    width: 100%;
`;

const Label = styled.label`
    color: ${({theme}) => theme.colors.gray900};
    font-weight: ${({theme}) => theme.fontWeights.medium};
`;

const Input = styled.input`
    border: 1px solid ${({theme}) => theme.colors.gray100};
    border-radius: ${({theme}) => theme.radii.base};
    box-shadow: ${({theme}) => theme.shadows.base};
    color: ${({theme}) => theme.colors.gray900};
    margin-top: ${({theme}) => theme.space[3]};
    padding: ${({theme}) => theme.space[4]} ${({theme}) => theme.space[5]};
`;

type FieldProps = React.ComponentPropsWithoutRef<'input'> & {
    label: string;
};

export const Field = ({label, ...otherProps}: FieldProps) => {
    const id = React.useId();

    return (
        <Container data-testid="field-container">
            <Label htmlFor={id}>{label}</Label>
            <Input {...otherProps} id={id} data-testid="field-input" />
        </Container>
    );
};
