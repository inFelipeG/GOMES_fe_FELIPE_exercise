import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// Pages
import {RootPage, loader as rootLoader} from 'pages/RootPage';
import {TeamPage, loader as teamLoader} from 'pages/TeamPage';
import {UserPage, loader as userLoader} from 'pages/UserPage';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000,
        },
    },
});

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        loader: rootLoader(queryClient),
        errorElement: <p>Error while loading root page!</p>,
    },
    {
        path: '/teams/:teamId',
        element: <TeamPage />,
        loader: teamLoader(queryClient),
        errorElement: <p>Error while loading team page!</p>,
    },
    {
        path: '/users/:userId',
        element: <UserPage />,
        loader: userLoader(queryClient),
        errorElement: <p>Error while loading user page!</p>,
    },
]);

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
};
