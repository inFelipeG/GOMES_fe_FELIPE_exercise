import React from 'react';
import {Await, defer, useLoaderData} from 'react-router-dom';
import {Container} from 'components/Container';
import {Field} from 'components/Field';
import {Header} from 'components/Header';
import {LoadingSpinner} from 'components/LoadingSpinner';
import {MainContent} from 'components/MainContent';
import {UserCard} from 'components/UserCard';
import {services} from 'services';
import type {QueryClient} from '@tanstack/react-query';
import type {TeamComposition, TeamMetadata} from 'types';

const fetchTeamById = (teamId: TeamMetadata['id']) => {
    return {
        queryKey: ['teams', 'fetchById', teamId],
        queryFn: () => {
            return services.teams.fetchById(teamId);
        },
    };
};

export const loader = (queryClient: QueryClient) => {
    return ({params}) => {
        const teamId = params.teamId as TeamMetadata['id'];
        const queryOptions = fetchTeamById(teamId);

        return defer({
            fetchTeamByIdPromise:
                queryClient.getQueryData<TeamComposition>(queryOptions.queryKey) ??
                queryClient.fetchQuery(queryOptions),
        });
    };
};

type TeamPageContentProps = {
    teamComposition: TeamComposition;
};

export const TeamPageContent = ({teamComposition}: TeamPageContentProps) => {
    const [query, setQuery] = React.useState('');

    return (
        <React.Fragment>
            <Header title={teamComposition.name} showBackButton />
            <MainContent>
                <Container>
                    <Field
                        label="Filter"
                        value={query}
                        onChange={event => {
                            setQuery(event.currentTarget.value);
                        }}
                    />
                </Container>
                <Container>
                    {teamComposition.members
                        .filter(({firstName, lastName}) => {
                            const fullName = `${firstName} ${lastName}`;

                            return fullName.toLowerCase().includes(query.toLowerCase());
                        })
                        .map(member => {
                            return (
                                <UserCard
                                    key={member.id}
                                    url={`/users/${member.id}`}
                                    avatarUrl={member.avatarUrl}
                                    primaryText={`${member.firstName} ${member.lastName}`}
                                    secondaryText={member.displayName}
                                    isLead={member.isLead}
                                />
                            );
                        })}
                </Container>
            </MainContent>
        </React.Fragment>
    );
};

export const TeamPage = () => {
    const deferredData = useLoaderData() as {
        fetchTeamByIdPromise: TeamComposition | Promise<TeamComposition>;
    };

    return (
        <React.Suspense fallback={<LoadingSpinner />}>
            <Await
                resolve={deferredData.fetchTeamByIdPromise}
                errorElement={<p>Error while fetching team!</p>}
            >
                {(teamComposition: TeamComposition) => {
                    return <TeamPageContent teamComposition={teamComposition} />;
                }}
            </Await>
        </React.Suspense>
    );
};
