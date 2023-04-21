import React from 'react';
import {Badge} from 'components/Badge';
import {CardAvatar, CardBody, CardPrimaryText, CardSecondaryText} from 'components/Card';
import {VerticalStack} from 'components/VerticalStack';

export type UserCardProps = {
    url?: string;
    avatarUrl: string;
    primaryText: string;
    secondaryText: string;
    isLead?: boolean;
};

export const UserCard = ({url, avatarUrl, primaryText, secondaryText, isLead}: UserCardProps) => {
    return (
        <CardBody url={url}>
            <VerticalStack amount={5}>
                <CardAvatar
                    src={avatarUrl}
                    alt="User's profile picture."
                    data-testid="card-avatar"
                />
                <div>
                    <CardPrimaryText>{primaryText}</CardPrimaryText>
                    <CardSecondaryText>{secondaryText}</CardSecondaryText>
                </div>
                {isLead && <Badge data-testid="badge">Lead</Badge>}
            </VerticalStack>
        </CardBody>
    );
};
