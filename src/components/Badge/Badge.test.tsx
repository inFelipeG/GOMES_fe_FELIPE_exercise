import React from 'react';
import {Badge} from 'components/Badge';
import {renderWithProviders} from 'helpers';

describe('Badge', () => {
    it('renders without crashing', () => {
        const testId = 'badge';
        const {getByTestId} = renderWithProviders(<Badge data-testid={testId} />);

        expect(getByTestId(testId)).toBeInTheDocument();
    });

    it('renders text', () => {
        const text = 'Badge';
        const {getByText} = renderWithProviders(<Badge>{text}</Badge>);

        expect(getByText(text)).toBeInTheDocument();
    });
});
