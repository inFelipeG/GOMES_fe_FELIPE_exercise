import React from 'react';
import {LoadingSpinner} from 'components/LoadingSpinner';
import {renderWithProviders} from 'helpers';

describe('LoadingSpinner', () => {
    it('renders without crashing', () => {
        const {getByTestId} = renderWithProviders(<LoadingSpinner />);

        expect(getByTestId('loading-spinner')).toBeInTheDocument();
    });
});
