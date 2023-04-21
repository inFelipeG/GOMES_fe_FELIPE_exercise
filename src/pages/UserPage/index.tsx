import React from 'react';
import {Await, defer, useLoaderData} from 'react-router-dom';
import {Container} from 'components/Container';
import {Header} from 'components/Header';
import {LoadingSpinner} from 'components/LoadingSpinner';
import {MainContent} from 'components/MainContent';
import {UserCard} from 'components/UserCard';
import {services} from 'services';
import type {QueryClient} from '@tanstack/react-query';
import type {UserInformation} from 'types';

const fetchUserById = (userId: UserInformation['id']) => {
    return {
        queryKey: ['users', 'fetchById', userId],
        queryFn: () => {
            return services.users.fetchById(userId);
        },
    };
};

export const loader = (queryClient: QueryClient) => {
    return ({params}) => {
        const userId = params.userId as UserInformation['id'];
        const queryOptions = fetchUserById(userId);

        return defer({
            fetchUserByIdPromise:
                queryClient.getQueryData<UserInformation>(queryOptions.queryKey) ??
                queryClient.fetchQuery(queryOptions),
        });
    };
};

type UserInformationProps = {
    userInformation: UserInformation;
};

export const UserPageContent = ({userInformation}: UserInformationProps) => {
    const fullName = `${userInformation.firstName} ${userInformation.lastName}`;

    return (
        <React.Fragment>
            <Header title={fullName} showBackButton />
            <MainContent>
                <Container>
                    <UserCard
                        avatarUrl={userInformation.avatarUrl}
                        primaryText={userInformation.displayName}
                        secondaryText={userInformation.location}
                    />
                </Container>
            </MainContent>
        </React.Fragment>
    );
};

export const UserPage = () => {
    const deferredData = useLoaderData() as {
        fetchUserByIdPromise: UserInformation | Promise<UserInformation>;
    };

    return (
        <React.Suspense fallback={<LoadingSpinner />}>
            <Await
                resolve={deferredData.fetchUserByIdPromise}
                errorElement={<p>Error while fetching user!</p>}
            >
                {(userInformation: UserInformation) => {
                    return <UserPageContent userInformation={userInformation} />;
                }}
            </Await>
        </React.Suspense>
    );
};
