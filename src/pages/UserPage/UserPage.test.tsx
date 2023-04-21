import React from 'react';
import {renderWithProviders} from 'helpers';
import {UserPageContent} from 'pages/UserPage';
import type {UserInformation} from 'types';

const userInformation: UserInformation = {
    id: '2',
    avatarUrl: '#',
    displayName: 'richardRice',
    firstName: 'Richard',
    lastName: 'Rice',
    location: 'Neverland',
};

const props = {
    userInformation,
};

describe('UserPageContent', () => {
    it('renders without crashing', () => {
        const title = `${userInformation.firstName} ${userInformation.lastName}`;
        const {getByText} = renderWithProviders(<UserPageContent {...props} />);

        expect(getByText(title).textContent).toBe(title);
    });

    it('renders user information', () => {
        const {getByText} = renderWithProviders(<UserPageContent {...props} />);

        expect(getByText(userInformation.displayName).textContent).toBe(
            userInformation.displayName
        );
        expect(getByText(userInformation.location).textContent).toBe(userInformation.location);
    });
});
