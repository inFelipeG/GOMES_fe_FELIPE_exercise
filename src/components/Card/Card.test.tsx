import React from 'react';
import {CardAvatar, CardBody, CardPrimaryText, CardSecondaryText} from 'components/Card';
import {renderWithProviders} from 'helpers';

describe('CardAvatar', () => {
    it('renders without crashing', () => {
        const testId = 'card-avatar';
        const {getByTestId} = renderWithProviders(<CardAvatar data-testid={testId} />);

        expect(getByTestId(testId)).toBeInTheDocument();
    });
});

const text = 'Text';

describe('CardBody', () => {
    it('renders without crashing', () => {
        const {getByTestId} = renderWithProviders(<CardBody>{text}</CardBody>);

        expect(getByTestId('card-body')).toBeInTheDocument();
    });

    it('renders as an anchor element when the url prop is defined', () => {
        const {getByTestId} = renderWithProviders(<CardBody url="/noop">{text}</CardBody>);

        expect(getByTestId('card-body').tagName).toBe('A');
    });

    it('renders as a div element when the url prop is not defined', () => {
        const {getByTestId} = renderWithProviders(<CardBody>{text}</CardBody>);

        expect(getByTestId('card-body').tagName).toBe('DIV');
    });

    it('renders content', () => {
        const {getByTestId} = renderWithProviders(<CardBody>{text}</CardBody>);

        expect(getByTestId('card-body').textContent).toBe(text);
    });
});

describe('CardPrimaryText', () => {
    it('renders without crashing', () => {
        const testId = 'card-primary-text';
        const {getByTestId} = renderWithProviders(
            <CardPrimaryText data-testid={testId}>{text}</CardPrimaryText>
        );

        expect(getByTestId(testId)).toBeInTheDocument();
    });

    it('renders content', () => {
        const {getByText} = renderWithProviders(<CardPrimaryText>{text}</CardPrimaryText>);

        expect(getByText(text)).toBeInTheDocument();
    });
});

describe('CardSecondaryText', () => {
    it('renders without crashing', () => {
        const testId = 'card-primary-text';
        const {getByTestId} = renderWithProviders(
            <CardSecondaryText data-testid={testId}>{text}</CardSecondaryText>
        );

        expect(getByTestId(testId)).toBeInTheDocument();
    });

    it('renders content', () => {
        const {getByText} = renderWithProviders(<CardSecondaryText>{text}</CardSecondaryText>);

        expect(getByText(text)).toBeInTheDocument();
    });
});
