import {render} from '@testing-library/react';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {theme} from 'theme';

export const renderWithProviders = (children: React.ReactNode) => {
    return render(
        <BrowserRouter>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </BrowserRouter>
    );
};
