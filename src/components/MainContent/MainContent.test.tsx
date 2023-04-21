import React from 'react';
import {MainContent} from 'components/MainContent';
import {renderWithProviders} from 'helpers';

describe('MainContent', () => {
    it('renders without crashing', () => {
        const testId = 'main-content';
        const {getByTestId} = renderWithProviders(<MainContent data-testid={testId} />);

        expect(getByTestId(testId)).toBeInTheDocument();
    });

    it('renders text', () => {
        const text = 'MainContent';
        const {getByText} = renderWithProviders(<MainContent>{text}</MainContent>);

        expect(getByText(text)).toBeInTheDocument();
    });
});
