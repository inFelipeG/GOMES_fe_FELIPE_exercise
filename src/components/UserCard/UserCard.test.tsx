import React from 'react';
import {UserCard} from 'components/UserCard';
import {renderWithProviders} from 'helpers';
import type {UserCardProps} from 'components/UserCard';

const props: UserCardProps = {
    url: '/noop',
    avatarUrl: '#',
    primaryText: 'Primary Text',
    secondaryText: 'Secondary Text',
};

describe('UserCard', () => {
    it('renders without crashing', () => {
        const {getByTestId} = renderWithProviders(<UserCard {...props} />);

        expect(getByTestId('card-body')).toBeInTheDocument();
    });

    it('has correct URL', () => {
        const {getByTestId} = renderWithProviders(<UserCard {...props} />);

        const url = (getByTestId('card-body') as HTMLAnchorElement).href;

        expect(url).toBe(`${window.location.origin}${props.url}`);
    });

    it('renders avatar', () => {
        const {getByTestId} = renderWithProviders(<UserCard {...props} />);

        expect(getByTestId('card-avatar')).toBeInTheDocument();
    });

    it('renders primary text', () => {
        const {getByText} = renderWithProviders(<UserCard {...props} />);

        expect(getByText(props.primaryText)).toBeInTheDocument();
    });

    it('renders secondary text', () => {
        const {getByText} = renderWithProviders(<UserCard {...props} />);

        expect(getByText(props.secondaryText)).toBeInTheDocument();
    });

    it('hides badge', () => {
        const {queryByTestId} = renderWithProviders(<UserCard {...props} />);

        expect(queryByTestId('badge')).not.toBeInTheDocument();
    });

    it('renders badge', () => {
        const {getByTestId} = renderWithProviders(<UserCard {...props} isLead />);

        expect(getByTestId('badge')).toBeInTheDocument();
    });
});
