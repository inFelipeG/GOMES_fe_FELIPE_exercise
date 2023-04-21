import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components';
import {App} from 'App';
import {GlobalStyle} from 'components/GlobalStyle';
import {theme} from 'theme';

const root = document.getElementById('root');

if (root) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </React.StrictMode>
    );
}
