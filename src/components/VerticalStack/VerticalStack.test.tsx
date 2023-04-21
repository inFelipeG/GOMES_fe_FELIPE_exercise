import React from 'react';
import {VerticalStack} from 'components/VerticalStack';
import {renderWithProviders} from 'helpers';

describe('VerticalStack', () => {
    it('renders without crashing', () => {
        const testId = 'vertical-stack';
        const {getByTestId} = renderWithProviders(
            <VerticalStack amount={0} data-testid={testId} />
        );

        expect(getByTestId(testId)).toBeInTheDocument();
    });

    it('renders text', () => {
        const text = 'VerticalStack';
        const {getByText} = renderWithProviders(<VerticalStack amount={0}>{text}</VerticalStack>);

        expect(getByText(text)).toBeInTheDocument();
    });
});
