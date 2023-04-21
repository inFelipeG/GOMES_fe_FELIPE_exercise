import React from 'react';
import {Container} from 'components/Container';
import {renderWithProviders} from 'helpers';

describe('Container', () => {
    it('renders without crashing', () => {
        const testId = 'container';
        const {getByTestId} = renderWithProviders(<Container data-testid={testId} />);

        expect(getByTestId(testId)).toBeInTheDocument();
    });

    it('renders text', () => {
        const text = 'Container';
        const {getByText} = renderWithProviders(<Container>{text}</Container>);

        expect(getByText(text)).toBeInTheDocument();
    });
});
