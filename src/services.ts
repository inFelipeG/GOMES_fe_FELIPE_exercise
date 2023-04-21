import type {TeamComposition, TeamMetadata, TeamOverview, UserInformation} from 'types';

const fetchData = async (path = '') => {
    const input = `${process.env.REACT_APP_API_BASE_URL}/${path}`;

    const response = await fetch(input);
    const data = await response.json();

    return data;
};

const users = {
    fetchById: async (userId: UserInformation['id']): Promise<UserInformation> => {
        const userData = (await fetchData(`users/${userId}`)) as UserInformation;

        return {
            ...userData,
            avatarUrl: `https://robohash.org/${userData.id}?bgset=bg1`,
        };
    },
};

const teams = {
    fetchAll: (): Promise<TeamMetadata[]> => {
        return fetchData('teams');
    },
    fetchById: async (teamId: TeamMetadata['id']) => {
        const teamOverview = (await fetchData(`teams/${teamId}`)) as TeamOverview;

        const lead = await users.fetchById(teamOverview.teamLeadId);
        const members = await Promise.all(
            teamOverview.teamMemberIds.map(memberId => {
                return users.fetchById(memberId);
            })
        );

        return {
            name: teamOverview.name,
            members: [{...lead, isLead: true}, ...members],
        } as TeamComposition;
    },
};

export const services = {
    teams,
    users,
};
