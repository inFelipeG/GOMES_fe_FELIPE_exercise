import React from 'react';
import {Header} from 'components/Header';
import {renderWithProviders} from 'helpers';

describe('Header', () => {
    it('renders without crashing', () => {
        const {getByTestId} = renderWithProviders(<Header title="" />);

        expect(getByTestId('header-container')).toBeInTheDocument();
    });

    it('hides back button', () => {
        const {queryByTestId} = renderWithProviders(<Header title="" />);

        expect(queryByTestId('back-button')).not.toBeInTheDocument();
    });

    it('renders back button', () => {
        const {getByTestId} = renderWithProviders(<Header title="" showBackButton />);

        expect(getByTestId('back-button')).toBeInTheDocument();
    });

    it('renders title', () => {
        const title = 'Title';
        const {getByText} = renderWithProviders(<Header title={title} />);

        expect(getByText(title)).toBeInTheDocument();
    });
});
