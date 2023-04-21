import {fireEvent} from '@testing-library/react';
import React from 'react';
import {renderWithProviders} from 'helpers';
import {RootPageContent} from 'pages/RootPage';
import type {TeamMetadata} from 'types';

const teams: TeamMetadata[] = [
    {id: '1', name: 'Team 1'},
    {id: '11', name: 'Team 11'},
    {id: '111', name: 'Team 111'},
    {id: '2', name: 'Team 2'},
    {id: '3', name: 'Team 3'},
    {id: '4', name: 'Team 4'},
    {id: '5', name: 'Team 5'},
];

const props = {
    teams,
};

describe('RootPageContent', () => {
    it('renders without crashing', () => {
        const title = 'Teams';
        const {getByText} = renderWithProviders(<RootPageContent {...props} />);

        expect(getByText(title).textContent).toBe(title);
    });

    it('renders filter', () => {
        const {getByTestId} = renderWithProviders(<RootPageContent {...props} />);

        expect(getByTestId('field-container')).toBeInTheDocument();
    });

    it('renders teams', () => {
        const {getByText} = renderWithProviders(<RootPageContent {...props} />);

        teams.forEach(team => {
            expect(getByText(team.name).textContent).toBe(team.name);
        });
    });

    it('filters teams', () => {
        const query = '11';
        const {getByTestId, getByText} = renderWithProviders(<RootPageContent {...props} />);

        const input = getByTestId('field-input');

        fireEvent.change(input, {
            currentTarget: {
                value: query,
            },
        });

        teams
            .filter(team => {
                return team.name.includes(query);
            })
            .forEach(team => {
                expect(getByText(team.name).textContent).toBe(team.name);
            });
    });
});
