import React from 'react';
import {Await, defer, useLoaderData} from 'react-router-dom';
import {CardBody, CardSecondaryText} from 'components/Card';
import {Container} from 'components/Container';
import {Field} from 'components/Field';
import {Header} from 'components/Header';
import {LoadingSpinner} from 'components/LoadingSpinner';
import {MainContent} from 'components/MainContent';
import {services} from 'services';
import type {QueryClient} from '@tanstack/react-query';
import type {TeamMetadata} from 'types';

const fetchAllTeams = () => {
    return {
        queryKey: ['teams', 'fetchAll'],
        queryFn: services.teams.fetchAll,
    };
};

export const loader = (queryClient: QueryClient) => {
    return () => {
        const queryOptions = fetchAllTeams();

        return defer({
            fetchAllTeamsPromise:
                queryClient.getQueryData<TeamMetadata[]>(queryOptions.queryKey) ??
                queryClient.fetchQuery(queryOptions),
        });
    };
};

type RootPageContentProps = {
    teams: TeamMetadata[];
};

export const RootPageContent = ({teams}: RootPageContentProps) => {
    const [query, setQuery] = React.useState('');

    return (
        <React.Fragment>
            <Header title="Teams" />
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
                    {teams
                        .filter(({name}) => {
                            return name.toLowerCase().includes(query.toLowerCase());
                        })
                        .map(team => {
                            return (
                                <CardBody key={team.id} url={`/teams/${team.id}`}>
                                    <CardSecondaryText>{team.name}</CardSecondaryText>
                                </CardBody>
                            );
                        })}
                </Container>
            </MainContent>
        </React.Fragment>
    );
};

export const RootPage = () => {
    const deferredData = useLoaderData() as {
        fetchAllTeamsPromise: TeamMetadata[] | Promise<TeamMetadata[]>;
    };

    return (
        <React.Suspense fallback={<LoadingSpinner />}>
            <Await
                resolve={deferredData.fetchAllTeamsPromise}
                errorElement={<p>Error while fetching list!</p>}
            >
                {(teams: TeamMetadata[]) => {
                    return <RootPageContent teams={teams} />;
                }}
            </Await>
        </React.Suspense>
    );
};
