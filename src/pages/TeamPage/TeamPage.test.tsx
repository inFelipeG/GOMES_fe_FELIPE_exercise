import {fireEvent} from '@testing-library/react';
import React from 'react';
import {renderWithProviders} from 'helpers';
import {TeamPageContent} from 'pages/TeamPage';
import type {TeamComposition} from 'types';

const teamComposition: TeamComposition = {
    name: 'Team',
    members: [
        {
            id: '1',
            avatarUrl: '#',
            displayName: 'johnDoe',
            firstName: 'John',
            lastName: 'Doe',
            location: 'Neverland',
            isLead: true,
        },
        {
            id: '2',
            avatarUrl: '#',
            displayName: 'richardRice',
            firstName: 'Richard',
            lastName: 'Rice',
            location: 'Neverland',
        },
        {
            id: '3',
            avatarUrl: '#',
            displayName: 'savannahFernandez',
            firstName: 'Savannah',
            lastName: 'Fernandez',
            location: 'Neverland',
        },
    ],
};

const props = {
    teamComposition,
};

describe('TeamPageContent', () => {
    it('renders without crashing', () => {
        const title = teamComposition.name;
        const {getByText} = renderWithProviders(<TeamPageContent {...props} />);

        expect(getByText(title).textContent).toBe(title);
    });

    it('renders filter', () => {
        const {getByTestId} = renderWithProviders(<TeamPageContent {...props} />);

        expect(getByTestId('field-container')).toBeInTheDocument();
    });

    it('renders team composition', () => {
        const {getByText} = renderWithProviders(<TeamPageContent {...props} />);

        teamComposition.members.forEach(member => {
            const fullName = `${member.firstName} ${member.lastName}`;

            expect(getByText(fullName).textContent).toBe(fullName);
        });
    });

    it('filters team composition', () => {
        const query = 'Savannah';
        const {getByTestId, getByText} = renderWithProviders(<TeamPageContent {...props} />);

        const input = getByTestId('field-input');

        fireEvent.change(input, {
            currentTarget: {
                value: query,
            },
        });

        teamComposition.members
            .filter(member => {
                const fullName = `${member.firstName} ${member.lastName}`;

                return fullName.includes(query);
            })
            .forEach(member => {
                const fullName = `${member.firstName} ${member.lastName}`;

                expect(getByText(fullName).textContent).toBe(fullName);
            });
    });
});
