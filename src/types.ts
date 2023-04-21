export type TeamComposition = {
    name: TeamMetadata['name'];
    members: UserInformation[];
};

export type TeamMetadata = {
    id: string;
    name: string;
};

export type TeamOverview = {
    id: string;
    name: string;
    teamLeadId: string;
    teamMemberIds: string[];
};

export type UserInformation = {
    id: string;
    avatarUrl: string;
    displayName: string;
    firstName: string;
    lastName: string;
    location: string;
    isLead?: boolean;
};
